import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageColorExtractorTool } from "@/components/tools/ImageColorExtractorTool";
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

  return <ImageColorExtractorTool messages={messages} />;
}
