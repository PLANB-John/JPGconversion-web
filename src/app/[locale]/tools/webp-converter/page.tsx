import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebpConverterTool } from "@/components/tools/WebpConverterTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getWebpConverterMessages } from "@/data/webpConverterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type WebpConverterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WebpConverterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "webp-converter");
}

export default async function WebpConverterPage({ params }: WebpConverterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getWebpConverterMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "what-is-webp",
    "how-to-convert-images-to-webp",
    "png-vs-jpg-vs-webp",
    "when-not-to-use-webp",
    "best-webp-quality-settings",
    "common-webp-conversion-mistakes",
    "why-webp-image-looks-blurry",
    "lossy-vs-lossless-webp"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <WebpConverterTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
