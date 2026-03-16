export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type HslColor = {
  h: number;
  s: number;
  l: number;
};

export function normalizeHex(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) {
    return "";
  }

  const withHash = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
  return withHash.toUpperCase();
}

export function isValidHexColor(input: string): boolean {
  return /^#([0-9A-F]{6})$/i.test(normalizeHex(input));
}

export function hexToRgb(hex: string): RgbColor {
  const normalized = normalizeHex(hex).replace("#", "");
  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);

  return { r, g, b };
}

export function rgbToHex({ r, g, b }: RgbColor): string {
  return `#${[r, g, b]
    .map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

export function rgbToHsl({ r, g, b }: RgbColor): HslColor {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  if (delta !== 0) {
    switch (max) {
      case rNorm:
        h = 60 * (((gNorm - bNorm) / delta) % 6);
        break;
      case gNorm:
        h = 60 * ((bNorm - rNorm) / delta + 2);
        break;
      default:
        h = 60 * ((rNorm - gNorm) / delta + 4);
        break;
    }
  }

  return {
    h: Math.round((h + 360) % 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function shiftChannel(channel: number, amount: number): number {
  return channel + (255 - channel) * amount;
}

export function lightenColor(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  return rgbToHex({
    r: shiftChannel(rgb.r, amount),
    g: shiftChannel(rgb.g, amount),
    b: shiftChannel(rgb.b, amount)
  });
}

export function darkenColor(hex: string, amount: number): string {
  const rgb = hexToRgb(hex);
  const multiplier = 1 - amount;

  return rgbToHex({
    r: rgb.r * multiplier,
    g: rgb.g * multiplier,
    b: rgb.b * multiplier
  });
}

export function rotateHue(hex: string, degrees: number): string {
  const { h, s, l } = rgbToHsl(hexToRgb(hex));

  const nextHue = (h + degrees + 360) % 360;
  const saturation = s / 100;
  const lightness = l / 100;

  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs(((nextHue / 60) % 2) - 1));
  const m = lightness - c / 2;

  let rPrime = 0;
  let gPrime = 0;
  let bPrime = 0;

  if (nextHue < 60) {
    rPrime = c;
    gPrime = x;
  } else if (nextHue < 120) {
    rPrime = x;
    gPrime = c;
  } else if (nextHue < 180) {
    gPrime = c;
    bPrime = x;
  } else if (nextHue < 240) {
    gPrime = x;
    bPrime = c;
  } else if (nextHue < 300) {
    rPrime = x;
    bPrime = c;
  } else {
    rPrime = c;
    bPrime = x;
  }

  return rgbToHex({
    r: (rPrime + m) * 255,
    g: (gPrime + m) * 255,
    b: (bPrime + m) * 255
  });
}


export function getRelativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const channels = [r, g, b].map((value) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function getContrastRatio(foregroundHex: string, backgroundHex: string): number {
  const foregroundLuminance = getRelativeLuminance(foregroundHex);
  const backgroundLuminance = getRelativeLuminance(backgroundHex);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}
