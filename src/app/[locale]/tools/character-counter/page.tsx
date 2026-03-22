import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CharacterCounterTool } from "@/components/tools/CharacterCounterTool";
import { getCharacterCounterMessages } from "@/data/characterCounterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type CharacterCounterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CharacterCounterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "character-counter");
}

export default async function CharacterCounterPage({ params }: CharacterCounterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getCharacterCounterMessages(locale);

  return <CharacterCounterTool messages={messages} />;
}
