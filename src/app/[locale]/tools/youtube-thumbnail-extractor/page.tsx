import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { YoutubeThumbnailExtractorTool } from "@/components/tools/YoutubeThumbnailExtractorTool";
import { getYoutubeThumbnailExtractorMessages } from "@/data/youtubeThumbnailExtractorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type YoutubeThumbnailExtractorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: YoutubeThumbnailExtractorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "youtube-thumbnail-extractor");
}

export default async function YoutubeThumbnailExtractorPage({ params }: YoutubeThumbnailExtractorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getYoutubeThumbnailExtractorMessages(locale);

  return <YoutubeThumbnailExtractorTool messages={messages} />;
}
