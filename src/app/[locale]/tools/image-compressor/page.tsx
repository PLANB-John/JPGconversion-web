import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageCompressorTool } from "@/components/tools/ImageCompressorTool";
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

  return <ImageCompressorTool messages={messages} />;
}
