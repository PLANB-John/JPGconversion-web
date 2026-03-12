"use client";

import { useMemo, useState } from "react";
import { defaultLocale, localeOptions } from "@/data/locales";

export function LocaleSelector() {
  const [selectedCode, setSelectedCode] = useState(defaultLocale.code);

  const selectedLocale = useMemo(
    () => localeOptions.find((locale) => locale.code === selectedCode) ?? defaultLocale,
    [selectedCode]
  );

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language selector">
      <label htmlFor="language-select" className="text-sm font-medium text-slate-700">
        Language
      </label>
      <select
        id="language-select"
        name="language"
        value={selectedCode}
        onChange={(event) => setSelectedCode(event.target.value)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-700 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
        aria-describedby="language-selection-status"
      >
        {localeOptions.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.nativeLabel}
          </option>
        ))}
      </select>
      <span id="language-selection-status" className="sr-only" aria-live="polite">
        Current language: {selectedLocale.label}
      </span>
    </div>
  );
}
