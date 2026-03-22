import Link from "next/link";
import type { LocaleCode } from "@/data/locales";

type FooterProps = {
  locale: LocaleCode;
  brand: string;
  note: string;
  links: {
    privacy: string;
    terms: string;
    about: string;
    contact: string;
    guides: string;
  };
};

export function Footer({ locale, brand, note, links }: FooterProps) {
  const footerLinks = [
    { href: `/${locale}/privacy-policy`, label: links.privacy },
    { href: `/${locale}/terms-of-use`, label: links.terms },
    { href: `/${locale}/about`, label: links.about },
    { href: `/${locale}/contact`, label: links.contact },
    { href: `/${locale}/guides`, label: links.guides }
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>
            © {new Date().getFullYear()} {brand}
          </p>
          <p className="mt-1">{note}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-slate-900 hover:underline hover:underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
