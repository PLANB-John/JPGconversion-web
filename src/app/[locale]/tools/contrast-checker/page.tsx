import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContrastCheckerTool } from "@/components/tools/ContrastCheckerTool";
import { getContrastCheckerMessages } from "@/data/contrastCheckerMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type ContrastCheckerPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContrastCheckerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "contrast-checker");
}

export default async function ContrastCheckerPage({ params }: ContrastCheckerPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getContrastCheckerMessages(locale);

  return <ContrastCheckerTool messages={messages} />;
}
