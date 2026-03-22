import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { getTrustMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type TermsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const page = getTrustMessages(locale).legal.terms;

  return buildLocalizedMetadata({
    locale,
    pagePath: "terms-of-use",
    title: page.title,
    description: page.description
  });
}

export default async function TermsOfUsePage({ params }: TermsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getTrustMessages(locale).legal.terms;

  return <ContentPage title={page.title} description={page.description} intro={page.intro} sections={page.sections} />;
}
