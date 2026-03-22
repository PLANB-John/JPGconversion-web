import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebpConverterTool } from "@/components/tools/WebpConverterTool";
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

  return <WebpConverterTool messages={messages} />;
}
