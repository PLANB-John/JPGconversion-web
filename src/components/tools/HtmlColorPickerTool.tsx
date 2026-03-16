"use client";

import { useMemo, useState } from "react";
import type { HtmlColorPickerMessages } from "@/data/htmlColorPickerMessages";
import { hexToRgb, isValidHexColor, normalizeHex, rgbToHsl } from "@/lib/color";

type Props = {
  messages: HtmlColorPickerMessages;
};

const defaultHex = "#3B82F6";

type ColorFormat = "hex" | "rgb" | "hsl";

export function HtmlColorPickerTool({ messages }: Props) {
  const [hexInput, setHexInput] = useState(defaultHex);
  const [copiedFormat, setCopiedFormat] = useState<ColorFormat | null>(null);

  const normalizedHex = normalizeHex(hexInput);
  const isHexValid = isValidHexColor(normalizedHex);
  const activeHex = isHexValid ? normalizedHex : defaultHex;

  const rgbString = useMemo(() => {
    const { r, g, b } = hexToRgb(activeHex);
    return `rgb(${r}, ${g}, ${b})`;
  }, [activeHex]);

  const hslString = useMemo(() => {
    const { h, s, l } = rgbToHsl(hexToRgb(activeHex));
    return `hsl(${h}, ${s}%, ${l}%)`;
  }, [activeHex]);

  const handleCopy = async (value: string, format: ColorFormat) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedFormat(format);
      window.setTimeout(() => setCopiedFormat(null), 1200);
    } catch {
      setCopiedFormat(null);
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{messages.title}</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{messages.description}</p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-slate-900">{messages.howToUseTitle}</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {messages.howToUseSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">{messages.pickerLabel}</span>
              <input
                type="color"
                value={activeHex}
                onChange={(event) => setHexInput(event.target.value.toUpperCase())}
                className="h-12 w-full cursor-pointer rounded-md border border-slate-300"
                aria-label={messages.pickerLabel}
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">{messages.manualHexLabel}</span>
              <input
                type="text"
                value={hexInput}
                onChange={(event) => setHexInput(event.target.value.toUpperCase())}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 placeholder:text-slate-400 focus:ring-2"
                placeholder="#3B82F6"
                aria-invalid={!isHexValid}
              />
            </label>

            {!isHexValid && <p className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{messages.invalidHexError}</p>}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-sm font-semibold text-slate-900">{messages.previewLabel}</h2>
          <div className="mt-3 h-52 w-full rounded-xl border border-slate-200 shadow-inner" style={{ backgroundColor: activeHex }} />

          <p className="mt-4 text-sm font-medium text-slate-700">
            {messages.selectedColorLabel}: <span className="font-semibold text-slate-900">{activeHex}</span>
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <ColorValueRow
            label={messages.hexLabel}
            value={activeHex}
            buttonText={copiedFormat === "hex" ? messages.copiedButton : messages.copyButton}
            onCopy={() => handleCopy(activeHex, "hex")}
          />
          <ColorValueRow
            label={messages.rgbLabel}
            value={rgbString}
            buttonText={copiedFormat === "rgb" ? messages.copiedButton : messages.copyButton}
            onCopy={() => handleCopy(rgbString, "rgb")}
          />
          <ColorValueRow
            label={messages.hslLabel}
            value={hslString}
            buttonText={copiedFormat === "hsl" ? messages.copiedButton : messages.copyButton}
            onCopy={() => handleCopy(hslString, "hsl")}
          />
        </div>
      </section>
    </div>
  );
}

function ColorValueRow({
  label,
  value,
  buttonText,
  onCopy
}: {
  label: string;
  value: string;
  buttonText: string;
  onCopy: () => void;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 break-all rounded-md bg-white px-2 py-2 text-sm font-medium text-slate-900">{value}</p>
      <button
        type="button"
        onClick={onCopy}
        className="mt-3 inline-flex rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-700"
      >
        {buttonText}
      </button>
    </div>
  );
}
