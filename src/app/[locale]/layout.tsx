import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getGuidesIndexMessages } from "@/data/guides";
import { locales, type LocaleCode } from "@/data/locales";
import { getMessages, getTrustMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return {
    description: messages.metadata.siteDescription,
    alternates: getLocaleAlternates(locale as LocaleCode)
  };
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);
  const trust = getTrustMessages(locale);
  const guides = getGuidesIndexMessages(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} nav={{ ...messages.nav, guides: guides.navLabel }} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:py-14">{children}</main>
      <Footer locale={locale} brand={messages.footer.copyright} note={messages.footer.note} links={{ ...trust.footerLinks, guides: guides.footerLabel }} />
    </div>
  );
}
