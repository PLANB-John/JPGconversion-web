import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageResizerTool } from "@/components/tools/ImageResizerTool";
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

  return <ImageResizerTool messages={messages} />;
}
