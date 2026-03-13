"use client";

import { useMemo, useState } from "react";
import type { PaletteGeneratorMessages } from "@/data/paletteGeneratorMessages";
import { darkenColor, isValidHexColor, lightenColor, normalizeHex, rotateHue } from "@/lib/color";

type PaletteSwatch = {
  label: string;
  hex: string;
};

type Props = {
  messages: PaletteGeneratorMessages;
};

const defaultBaseColor = "#4F46E5";

function ColorCard({ swatch, onCopy, copyLabel, copiedLabel, hexLabel, activeCopiedHex }: {
  swatch: PaletteSwatch;
  onCopy: (value: string) => void;
  copyLabel: string;
  copiedLabel: string;
  hexLabel: string;
  activeCopiedHex: string | null;
}) {
  const isCopied = activeCopiedHex === swatch.hex;

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="h-20 w-full" style={{ backgroundColor: swatch.hex }} aria-hidden="true" />
      <div className="space-y-2 p-3">
        <p className="text-sm font-medium text-slate-900">{swatch.label}</p>
        <p className="text-xs font-medium text-slate-500">{hexLabel}</p>
        <code className="inline-block rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">{swatch.hex}</code>
        <button
          type="button"
          onClick={() => onCopy(swatch.hex)}
          className="block rounded-md border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
        >
          {isCopied ? copiedLabel : copyLabel}
        </button>
      </div>
    </article>
  );
}

export function PaletteGeneratorTool({ messages }: Props) {
  const [hexInput, setHexInput] = useState(defaultBaseColor);
  const [baseColor, setBaseColor] = useState(defaultBaseColor);
  const [error, setError] = useState<string | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const lighterShades = useMemo(
    () => [0.2, 0.35, 0.5].map((amount, index) => ({ label: `${messages.lighterSectionTitle} ${index + 1}`, hex: lightenColor(baseColor, amount) })),
    [baseColor, messages.lighterSectionTitle]
  );

  const darkerShades = useMemo(
    () => [0.2, 0.35, 0.5].map((amount, index) => ({ label: `${messages.darkerSectionTitle} ${index + 1}`, hex: darkenColor(baseColor, amount) })),
    [baseColor, messages.darkerSectionTitle]
  );

  const coreSwatches: PaletteSwatch[] = useMemo(
    () => [
      { label: messages.baseColorLabel, hex: baseColor },
      { label: messages.complementaryLabel, hex: rotateHue(baseColor, 180) },
      { label: messages.analogousLeftLabel, hex: rotateHue(baseColor, -30) },
      { label: messages.analogousRightLabel, hex: rotateHue(baseColor, 30) }
    ],
    [baseColor, messages]
  );

  const allSwatches = useMemo(() => [...coreSwatches, ...lighterShades, ...darkerShades], [coreSwatches, lighterShades, darkerShades]);

  const handleGenerate = () => {
    const normalized = normalizeHex(hexInput);

    if (!isValidHexColor(normalized)) {
      setError(messages.errorInvalidHex);
      return;
    }

    setError(null);
    setCopiedHex(null);
    setBaseColor(normalized);
    setHexInput(normalized);
  };

  const handleColorPickerChange = (value: string) => {
    const normalized = normalizeHex(value);
    setHexInput(normalized);
    setBaseColor(normalized);
    setError(null);
    setCopiedHex(null);
  };

  const handleCopy = async (value: string) => {
    try {
      if (!navigator.clipboard) {
        setError(messages.copyNotSupported);
        return;
      }

      await navigator.clipboard.writeText(value);
      setCopiedHex(value);
      setError(null);
    } catch {
      setError(messages.copyNotSupported);
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{messages.title}</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{messages.description}</p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-slate-900">{messages.instructionsTitle}</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {messages.instructions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label htmlFor="palette-hex-input" className="block text-sm font-medium text-slate-700">
          {messages.inputLabel}
        </label>
        <p className="mt-1 text-xs text-slate-500">{messages.inputHint}</p>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            id="palette-hex-input"
            type="text"
            value={hexInput}
            onChange={(event) => setHexInput(event.target.value.toUpperCase())}
            placeholder="#4F46E5"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 placeholder:text-slate-400 focus:ring-2"
          />
          <input
            type="color"
            value={isValidHexColor(hexInput) ? normalizeHex(hexInput) : baseColor}
            onChange={(event) => handleColorPickerChange(event.target.value)}
            aria-label={messages.inputLabel}
            className="h-10 w-16 cursor-pointer rounded border border-slate-300 bg-white"
          />
          <button
            type="button"
            onClick={handleGenerate}
            className="inline-flex min-w-[9.5rem] items-center justify-center whitespace-nowrap rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {messages.generateButton}
          </button>
        </div>

        {error && <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{messages.paletteTitle}</h2>
          <p className="mt-1 text-sm text-slate-600">{messages.paletteDescription}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {allSwatches.map((swatch) => (
            <ColorCard
              key={`${swatch.label}-${swatch.hex}`}
              swatch={swatch}
              onCopy={handleCopy}
              copyLabel={messages.copyHex}
              copiedLabel={messages.copied}
              hexLabel={messages.hexLabel}
              activeCopiedHex={copiedHex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
