import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UtmBuilderTool } from "@/components/tools/UtmBuilderTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getUtmBuilderMessages } from "@/data/utmBuilderMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type UtmBuilderPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: UtmBuilderPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "utm-builder");
}

export default async function UtmBuilderPage({ params }: UtmBuilderPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getUtmBuilderMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "how-to-build-utm-links",
    "utm-parameters-explained",
    "common-utm-tagging-mistakes",
    "track-social-campaigns-with-utm-links",
    "track-email-clicks-with-utm-parameters",
    "name-utm-campaigns-consistently",
    "utm-source-vs-medium-vs-campaign",
    "use-utm-links-without-breaking-reporting",
    "best-utm-naming-rules-for-small-teams",
    "check-tagged-url-before-sharing"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <UtmBuilderTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
