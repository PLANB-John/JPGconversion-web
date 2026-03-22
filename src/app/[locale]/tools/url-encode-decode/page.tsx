import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UrlEncodeDecodeTool } from "@/components/tools/UrlEncodeDecodeTool";
import { getUrlEncodeDecodeMessages } from "@/data/urlEncodeDecodeMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type UrlEncodeDecodePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: UrlEncodeDecodePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "url-encode-decode");
}

export default async function UrlEncodeDecodePage({ params }: UrlEncodeDecodePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getUrlEncodeDecodeMessages(locale);

  return <UrlEncodeDecodeTool messages={messages} />;
}
