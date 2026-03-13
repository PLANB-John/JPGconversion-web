"use client";

import { useMemo, useState } from "react";
import type { ContrastCheckerMessages } from "@/data/contrastCheckerMessages";
import { getContrastRatio, isValidHexColor, normalizeHex } from "@/lib/color";

type Props = {
  messages: ContrastCheckerMessages;
};

type WcagResult = {
  label: string;
  passed: boolean;
};

const defaultForeground = "#111827";
const defaultBackground = "#FFFFFF";

function ColorInput({
  id,
  label,
  value,
  fallbackColor,
  hint,
  onTextChange,
  onPickerChange
}: {
  id: string;
  label: string;
  value: string;
  fallbackColor: string;
  hint: string;
  onTextChange: (value: string) => void;
  onPickerChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="flex gap-3">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(event) => onTextChange(event.target.value.toUpperCase())}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 placeholder:text-slate-400 focus:ring-2"
          placeholder="#111827"
        />
        <input
          type="color"
          value={isValidHexColor(value) ? normalizeHex(value) : fallbackColor}
          onChange={(event) => onPickerChange(event.target.value)}
          aria-label={label}
          className="h-10 w-16 cursor-pointer rounded border border-slate-300 bg-white"
        />
      </div>
      <p className="text-xs text-slate-500">{hint}</p>
    </div>
  );
}

export function ContrastCheckerTool({ messages }: Props) {
  const [foregroundInput, setForegroundInput] = useState(defaultForeground);
  const [backgroundInput, setBackgroundInput] = useState(defaultBackground);

  const normalizedForeground = normalizeHex(foregroundInput);
  const normalizedBackground = normalizeHex(backgroundInput);

  const foregroundValid = isValidHexColor(normalizedForeground);
  const backgroundValid = isValidHexColor(normalizedBackground);

  const hasError = !foregroundValid || !backgroundValid;

  const ratio = useMemo(() => {
    if (!foregroundValid || !backgroundValid) {
      return null;
    }

    return getContrastRatio(normalizedForeground, normalizedBackground);
  }, [foregroundValid, backgroundValid, normalizedForeground, normalizedBackground]);

  const wcagResults: WcagResult[] = useMemo(() => {
    if (ratio === null) {
      return [];
    }

    return [
      { label: messages.levelAALarge, passed: ratio >= 3 },
      { label: messages.levelAANormal, passed: ratio >= 4.5 },
      { label: messages.levelAAALarge, passed: ratio >= 4.5 },
      { label: messages.levelAAANormal, passed: ratio >= 7 }
    ];
  }, [messages, ratio]);

  const handleSwap = () => {
    setForegroundInput(normalizedBackground || defaultBackground);
    setBackgroundInput(normalizedForeground || defaultForeground);
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

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <ColorInput
            id="contrast-foreground"
            label={messages.foregroundLabel}
            value={foregroundInput}
            fallbackColor={defaultForeground}
            hint={messages.inputHint}
            onTextChange={setForegroundInput}
            onPickerChange={setForegroundInput}
          />

          <ColorInput
            id="contrast-background"
            label={messages.backgroundLabel}
            value={backgroundInput}
            fallbackColor={defaultBackground}
            hint={messages.inputHint}
            onTextChange={setBackgroundInput}
            onPickerChange={setBackgroundInput}
          />

          <button
            type="button"
            onClick={handleSwap}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            {messages.swapButton}
          </button>

          {hasError && <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{messages.errorInvalidHex}</p>}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm font-medium text-slate-600">{messages.ratioLabel}</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">{ratio ? `${ratio.toFixed(2)}:1` : "-"}</p>

            <h2 className="mt-5 text-lg font-semibold text-slate-900">{messages.wcagTitle}</h2>
            <ul className="mt-3 space-y-2">
              {wcagResults.map((item) => (
                <li key={item.label} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <span className="text-slate-700">{item.label}</span>
                  <span className={item.passed ? "font-semibold text-emerald-700" : "font-semibold text-rose-700"}>
                    {item.passed ? messages.pass : messages.fail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900">{messages.previewTitle}</h2>
            <div
              className="mt-3 rounded-xl border border-slate-200 p-5"
              style={{
                backgroundColor: backgroundValid ? normalizedBackground : defaultBackground,
                color: foregroundValid ? normalizedForeground : defaultForeground
              }}
            >
              <p className="text-2xl font-bold">{messages.previewText}</p>
              <p className="mt-2 text-sm">{messages.previewSubtext}</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
