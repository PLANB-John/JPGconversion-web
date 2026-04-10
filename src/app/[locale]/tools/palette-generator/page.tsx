import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaletteGeneratorTool } from "@/components/tools/PaletteGeneratorTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getPaletteGeneratorMessages } from "@/data/paletteGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type PaletteGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PaletteGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "palette-generator");
}

export default async function PaletteGeneratorPage({ params }: PaletteGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getPaletteGeneratorMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "create-basic-website-color-palette",
    "how-many-colors-in-brand-palette",
    "choose-supporting-colors-around-brand-color",
    "website-palette-mistakes",
    "build-consistent-color-palette",
    "choose-accent-colors-for-website",
    "test-color-palette-before-using",
    "extract-brand-colors-from-image"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <PaletteGeneratorTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
