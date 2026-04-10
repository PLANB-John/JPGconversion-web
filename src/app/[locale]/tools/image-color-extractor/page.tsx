import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageColorExtractorTool } from "@/components/tools/ImageColorExtractorTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getImageColorExtractorMessages } from "@/data/imageColorExtractorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type ImageColorExtractorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ImageColorExtractorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "image-color-extractor");
}

export default async function ImageColorExtractorPage({ params }: ImageColorExtractorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getImageColorExtractorMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "image-color-extractor-guide",
    "extract-brand-colors-from-image",
    "build-color-palette-from-photo",
    "when-image-color-sampling-helps",
    "mistakes-when-extracting-colors-from-images",
    "find-main-colors-in-image-quickly",
    "use-extracted-colors-in-website-palette",
    "avoid-bad-color-picks-from-busy-images"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <ImageColorExtractorTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
