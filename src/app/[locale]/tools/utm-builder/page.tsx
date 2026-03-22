import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UtmBuilderTool } from "@/components/tools/UtmBuilderTool";
import { getUtmBuilderMessages } from "@/data/utmBuilderMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type UtmBuilderPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: UtmBuilderPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "utm-builder");
}

export default async function UtmBuilderPage({ params }: UtmBuilderPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getUtmBuilderMessages(locale);

  return <UtmBuilderTool messages={messages} />;
}
