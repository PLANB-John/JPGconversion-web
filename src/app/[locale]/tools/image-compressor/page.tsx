import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageCompressorTool } from "@/components/tools/ImageCompressorTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getImageCompressorMessages } from "@/data/imageCompressorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type ImageCompressorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ImageCompressorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "image-compressor");
}

export default async function ImageCompressorPage({ params }: ImageCompressorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getImageCompressorMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "compress-images-for-page-speed",
    "best-image-file-size-for-websites",
    "why-large-images-slow-down-websites",
    "optimize-blog-images-before-uploading",
    "image-compression-mistakes-that-hurt-quality",
    "compress-images-without-making-them-look-bad",
    "best-image-compression-settings-for-web",
    "resize-image-before-compressing"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <ImageCompressorTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
