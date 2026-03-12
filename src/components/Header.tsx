import Link from "next/link";
import { LocaleSelector } from "@/components/LocaleSelector";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-base font-semibold text-slate-900 sm:text-lg">
          Global Tools Hub
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

          <LocaleSelector />
        </div>
      </div>
    </header>
  );
}
