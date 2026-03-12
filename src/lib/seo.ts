import type { Metadata } from "next";
import { defaultLocale, locales, type LocaleCode } from "@/data/locales";

function buildLocalePath(locale: LocaleCode, pagePath = "") {
  if (!pagePath) {
    return `/${locale}`;
  }

  return `/${locale}/${pagePath}`;
}

export function getLocaleAlternates(pagePath = ""): Metadata["alternates"] {
  const languages = Object.fromEntries(locales.map((locale) => [locale, buildLocalePath(locale, pagePath)]));

  return {
    canonical: buildLocalePath(defaultLocale, pagePath),
    languages: {
      ...languages,
      "x-default": buildLocalePath(defaultLocale, pagePath)
    }
  };
}
