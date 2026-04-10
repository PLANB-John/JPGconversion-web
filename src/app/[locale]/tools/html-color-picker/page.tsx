import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlColorPickerTool } from "@/components/tools/HtmlColorPickerTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getHtmlColorPickerMessages } from "@/data/htmlColorPickerMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type HtmlColorPickerPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HtmlColorPickerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "html-color-picker");
}

export default async function HtmlColorPickerPage({ params }: HtmlColorPickerPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getHtmlColorPickerMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "how-to-use-html-color-picker",
    "hex-vs-rgb-vs-hsl",
    "match-website-colors-consistently",
    "copy-web-color-from-screen",
    "common-color-picker-mistakes",
    "pick-website-colors-more-confidently",
    "when-to-use-hex-rgb-or-hsl",
    "check-color-combination-before-using"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <HtmlColorPickerTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
