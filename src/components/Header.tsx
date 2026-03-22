import Link from "next/link";
import type { LocaleCode } from "@/data/locales";
import { LocaleSelector } from "@/components/LocaleSelector";

type HeaderProps = {
  locale: LocaleCode;
  nav: {
    brand: string;
    home: string;
    tools: string;
    guides: string;
    languageLabel: string;
    languageAriaLabel: string;
    currentLanguagePrefix: string;
  };
};

export function Header({ locale, nav }: HeaderProps) {
  const navItems = [
    { href: `/${locale}`, label: nav.home },
    { href: `/${locale}/tools`, label: nav.tools },
    { href: `/${locale}/guides`, label: nav.guides }
  ];

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={`/${locale}`} className="text-base font-semibold text-slate-900 sm:text-lg">
          {nav.brand}
        </Link>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-2 sm:gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LocaleSelector
            locale={locale}
            label={nav.languageLabel}
            ariaLabel={nav.languageAriaLabel}
            currentLanguagePrefix={nav.currentLanguagePrefix}
          />
        </div>
      </div>
    </header>
  );
}
