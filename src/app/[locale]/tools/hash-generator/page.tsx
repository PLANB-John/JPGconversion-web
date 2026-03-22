import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HashGeneratorTool } from "@/components/tools/HashGeneratorTool";
import { getHashGeneratorMessages } from "@/data/hashGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type HashGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HashGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "hash-generator");
}

export default async function HashGeneratorPage({ params }: HashGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getHashGeneratorMessages(locale);

  return <HashGeneratorTool messages={messages} />;
}
