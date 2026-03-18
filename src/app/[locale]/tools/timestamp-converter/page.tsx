import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TimestampConverterTool } from "@/components/tools/TimestampConverterTool";
import { getTimestampConverterMessages } from "@/data/timestampConverterMessages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

type TimestampConverterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TimestampConverterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getTimestampConverterMessages(locale);

  return {
    title: messages.metadataTitle,
    description: messages.metadataDescription,
    alternates: getLocaleAlternates("tools/timestamp-converter")
  };
}

export default async function TimestampConverterPage({ params }: TimestampConverterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getTimestampConverterMessages(locale);

  return <TimestampConverterTool messages={messages} />;
}
