export type LocaleOption = {
  code: string;
  label: string;
  nativeLabel: string;
  pathPrefix: string;
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
  }
];

export const defaultLocale =
  localeOptions.find((locale) => locale.isDefault) ?? localeOptions[0];
