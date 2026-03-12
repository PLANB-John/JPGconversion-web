"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, localeOptions, type LocaleCode } from "@/data/locales";
import { buildLocalizedPath } from "@/lib/i18n";

type LocaleSelectorProps = {
  locale: LocaleCode;
  label: string;
  ariaLabel: string;
  currentLanguagePrefix: string;
};

export function LocaleSelector({ locale, label, ariaLabel, currentLanguagePrefix }: LocaleSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const selectedLocale = useMemo(
    () => localeOptions.find((option) => option.code === locale) ?? localeOptions.find((option) => option.code === defaultLocale)!,
    [locale]
  );

  const onLanguageChange = (nextLocale: LocaleCode) => {
    const nextPath = buildLocalizedPath(nextLocale, pathname ?? `/${locale}`);
    router.push(nextPath);
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label={ariaLabel}>
      <label htmlFor="language-select" className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        id="language-select"
        name="language"
        value={locale}
        onChange={(event) => onLanguageChange(event.target.value as LocaleCode)}
        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-700 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
        aria-describedby="language-selection-status"
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.nativeLabel}
          </option>
        ))}
      </select>
      <span id="language-selection-status" className="sr-only" aria-live="polite">
        {currentLanguagePrefix}: {selectedLocale.label}
      </span>
    </div>
  );
}
