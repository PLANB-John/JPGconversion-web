import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Base64EncodeDecodeTool } from "@/components/tools/Base64EncodeDecodeTool";
import { getBase64EncodeDecodeMessages } from "@/data/base64EncodeDecodeMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type Base64EncodeDecodePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Base64EncodeDecodePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  return buildToolMetadata(locale, "base64-encode-decode");
}

export default async function Base64EncodeDecodePage({ params }: Base64EncodeDecodePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getBase64EncodeDecodeMessages(locale);

  return <Base64EncodeDecodeTool messages={messages} />;
}
