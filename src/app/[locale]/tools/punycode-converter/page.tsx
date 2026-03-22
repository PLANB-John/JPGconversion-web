import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PunycodeConverterTool } from "@/components/tools/PunycodeConverterTool";
import { getPunycodeConverterMessages } from "@/data/punycodeConverterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type PunycodeConverterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PunycodeConverterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "punycode-converter");
}

export default async function PunycodeConverterPage({ params }: PunycodeConverterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getPunycodeConverterMessages(locale);

  return <PunycodeConverterTool messages={messages} />;
}
