import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OgPreviewTool } from "@/components/tools/OgPreviewTool";
import { getOgPreviewMessages } from "@/data/ogPreviewMessages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

type OgPreviewPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: OgPreviewPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getOgPreviewMessages(locale);

  return {
    title: messages.metadataTitle,
    description: messages.metadataDescription,
    alternates: getLocaleAlternates("tools/og-preview")
  };
}

export default async function OgPreviewPage({ params }: OgPreviewPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getOgPreviewMessages(locale);

  return <OgPreviewTool messages={messages} />;
}
