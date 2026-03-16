"use client";

import { useMemo, useState } from "react";
import type { CssVariableGeneratorMessages } from "@/data/cssVariableGeneratorMessages";

type Props = {
  messages: CssVariableGeneratorMessages;
};

type VariableRow = {
  id: number;
  name: string;
  hex: string;
};

const hexPattern = /^#([0-9a-fA-F]{6})$/;

function sanitizeToken(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-_]/g, "");
}

function normalizeHex(value: string) {
  if (!value.startsWith("#")) {
    return `#${value}`;
  }

  return value;
}

export function CssVariableGeneratorTool({ messages }: Props) {
  const [prefix, setPrefix] = useState("brand");
  const [rows, setRows] = useState<VariableRow[]>([
    { id: 1, name: "primary", hex: "#4f46e5" },
    { id: 2, name: "secondary", hex: "#06b6d4" },
    { id: 3, name: "accent", hex: "#f59e0b" }
  ]);
  const [copied, setCopied] = useState(false);

  const hasInvalidHex = useMemo(() => rows.some((row) => !hexPattern.test(row.hex)), [rows]);

  const cssCode = useMemo(() => {
    const cleanPrefix = sanitizeToken(prefix) || "theme";

    const lines = rows.map((row, index) => {
      const fallbackName = `color-${index + 1}`;
      const cleanName = sanitizeToken(row.name) || fallbackName;
      const safeHex = hexPattern.test(row.hex) ? row.hex.toLowerCase() : "#000000";

      return `  --${cleanPrefix}-${cleanName}: ${safeHex};`;
    });

    return `:root {\n${lines.join("\n")}\n}`;
  }, [prefix, rows]);

  const updateRow = (id: number, changes: Partial<VariableRow>) => {
    setRows((currentRows) => currentRows.map((row) => (row.id === id ? { ...row, ...changes } : row)));
  };

  const addRow = () => {
    setRows((currentRows) => {
      const nextId = (currentRows.at(-1)?.id ?? 0) + 1;

      return [...currentRows, { id: nextId, name: `color-${nextId}`, hex: "#94a3b8" }];
    });
  };

  const handleCopy = async () => {
    if (hasInvalidHex) {
      return;
    }

    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
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
            {messages.howToUseSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="prefix" className="block text-sm font-medium text-slate-700">
            {messages.prefixLabel}
          </label>
          <input
            id="prefix"
            type="text"
            value={prefix}
            onChange={(event) => setPrefix(event.target.value)}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800"
            placeholder="brand"
          />

          <div className="mt-5 space-y-4">
            {rows.map((row) => {
              const rowInvalid = !hexPattern.test(row.hex);

              return (
                <div key={row.id} className="rounded-lg border border-slate-200 p-3">
                  <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
                    <label className="space-y-1 text-sm font-medium text-slate-700">
                      <span>{messages.variableNameLabel}</span>
                      <input
                        type="text"
                        value={row.name}
                        onChange={(event) => updateRow(row.id, { name: event.target.value })}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800"
                      />
                    </label>

                    <label className="space-y-1 text-sm font-medium text-slate-700">
                      <span>{messages.colorLabel}</span>
                      <input
                        type="text"
                        value={row.hex}
                        onChange={(event) => updateRow(row.id, { hex: normalizeHex(event.target.value.trim()) })}
                        className={`w-full rounded-md border px-3 py-2 text-sm text-slate-800 ${rowInvalid ? "border-rose-400" : "border-slate-300"}`}
                        placeholder="#4f46e5"
                      />
                    </label>

                    <input
                      type="color"
                      value={hexPattern.test(row.hex) ? row.hex : "#000000"}
                      onChange={(event) => updateRow(row.id, { hex: event.target.value })}
                      className="h-11 w-full cursor-pointer rounded-md border border-slate-300 sm:w-16"
                      aria-label={`${messages.colorLabel} ${row.id}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {hasInvalidHex && <p className="mt-3 text-sm text-rose-600">{messages.invalidHexMessage}</p>}

          <button
            type="button"
            onClick={addRow}
            className="mt-4 inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {messages.addRowButton}
          </button>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-sm font-semibold text-slate-900">{messages.previewLabel}</h2>
          <div className="mt-3 space-y-2">
            {rows.map((row, index) => {
              const cleanPrefix = sanitizeToken(prefix) || "theme";
              const cleanName = sanitizeToken(row.name) || `color-${index + 1}`;
              const safeHex = hexPattern.test(row.hex) ? row.hex : "#000000";

              return (
                <div key={row.id} className="flex items-center gap-3 rounded-md border border-slate-200 p-2">
                  <span className="h-8 w-8 rounded-md border border-slate-300" style={{ backgroundColor: safeHex }} />
                  <p className="text-sm text-slate-700">--{cleanPrefix}-{cleanName}</p>
                </div>
              );
            })}
          </div>

          <h3 className="mt-6 text-sm font-semibold text-slate-900">{messages.generatedCssLabel}</h3>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100 sm:text-sm">{cssCode}</pre>
          <button
            type="button"
            onClick={handleCopy}
            disabled={hasInvalidHex}
            className="mt-3 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {copied ? messages.copiedButton : messages.copyButton}
          </button>
        </article>
      </section>
    </div>
  );
}
