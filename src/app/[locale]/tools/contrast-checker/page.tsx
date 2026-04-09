import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContrastCheckerTool } from "@/components/tools/ContrastCheckerTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getContrastCheckerMessages } from "@/data/contrastCheckerMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type ContrastCheckerPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContrastCheckerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "contrast-checker");
}

export default async function ContrastCheckerPage({ params }: ContrastCheckerPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getContrastCheckerMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "contrast-checker-guide",
    "check-text-contrast-for-accessibility",
    "low-contrast-text-hurts-readability",
    "wcag-contrast-ratio-basics",
    "accessibility-color-contrast-mistakes",
    "fix-low-contrast-text-on-website",
    "best-contrast-practices-for-ui-text",
    "check-brand-colors-without-hurting-accessibility"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <ContrastCheckerTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
