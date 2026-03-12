export const locales = ["en", "ko", "ja", "es", "fr", "de"] as const;

export type LocaleCode = (typeof locales)[number];

export type LocaleOption = {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  pathPrefix: `/${LocaleCode}`;
  isDefault?: boolean;
};

export const localeOptions: LocaleOption[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    pathPrefix: "/en",
    isDefault: true
  },
  {
    code: "ko",
    label: "Korean",
    nativeLabel: "한국어",
    pathPrefix: "/ko"
  },
  {
    code: "ja",
    label: "Japanese",
    nativeLabel: "日本語",
    pathPrefix: "/ja"
  },
  {
    code: "es",
    label: "Spanish",
    nativeLabel: "Español",
    pathPrefix: "/es"
  },
  {
    code: "fr",
    label: "French",
    nativeLabel: "Français",
    pathPrefix: "/fr"
  },
  {
    code: "de",
    label: "German",
    nativeLabel: "Deutsch",
    pathPrefix: "/de"
  }
];

export const defaultLocale: LocaleCode = "en";
