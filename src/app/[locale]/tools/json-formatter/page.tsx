import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { getJsonFormatterMessages } from "@/data/jsonFormatterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type JsonFormatterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: JsonFormatterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "json-formatter");
}

export default async function JsonFormatterPage({ params }: JsonFormatterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getJsonFormatterMessages(locale);

  return <JsonFormatterTool messages={messages} />;
}
