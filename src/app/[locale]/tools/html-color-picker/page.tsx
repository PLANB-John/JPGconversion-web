import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlColorPickerTool } from "@/components/tools/HtmlColorPickerTool";
import { getHtmlColorPickerMessages } from "@/data/htmlColorPickerMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type HtmlColorPickerPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HtmlColorPickerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "html-color-picker");
}

export default async function HtmlColorPickerPage({ params }: HtmlColorPickerPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getHtmlColorPickerMessages(locale);

  return <HtmlColorPickerTool messages={messages} />;
}
