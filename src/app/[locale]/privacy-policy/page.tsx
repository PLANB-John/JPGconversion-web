import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { getTrustMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const page = getTrustMessages(locale).legal.privacy;

  return buildLocalizedMetadata({
    locale,
    pagePath: "privacy-policy",
    title: page.title,
    description: page.description
  });
}

export default async function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getTrustMessages(locale).legal.privacy;

  return <ContentPage title={page.title} description={page.description} intro={page.intro} sections={page.sections} />;
}
