import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageResizerTool } from "@/components/tools/ImageResizerTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getImageResizerMessages } from "@/data/imageResizerMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type ImageResizerPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ImageResizerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "image-resizer");
}

export default async function ImageResizerPage({ params }: ImageResizerPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getImageResizerMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "resize-images-for-social-media-without-bad-cropping",
    "best-image-dimensions-for-blog-headers-and-thumbnails",
    "resize-image-without-stretching",
    "best-image-file-size-for-websites",
    "optimize-blog-images-before-uploading",
    "resize-image-before-compressing",
    "compress-images-without-making-them-look-bad",
    "open-graph-image-size-guide"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <ImageResizerTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
