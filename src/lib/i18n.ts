import { defaultLocale, locales, type LocaleCode } from "@/data/locales";

export function isValidLocale(value: string): value is LocaleCode {
  return locales.includes(value as LocaleCode);
}

export function getSafeLocale(value: string): LocaleCode {
  return isValidLocale(value) ? value : defaultLocale;
}

export function buildLocalizedPath(locale: LocaleCode, pathname: string) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return `/${locale}`;
  }

  const [first, ...rest] = parts;

  if (isValidLocale(first)) {
    const suffix = rest.join("/");
    return suffix ? `/${locale}/${suffix}` : `/${locale}`;
  }

  return `/${locale}/${parts.join("/")}`;
}
