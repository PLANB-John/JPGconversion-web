import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaletteGeneratorTool } from "@/components/tools/PaletteGeneratorTool";
import { getPaletteGeneratorMessages } from "@/data/paletteGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

type PaletteGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PaletteGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getPaletteGeneratorMessages(locale);

  return {
    title: messages.metadataTitle,
    description: messages.metadataDescription,
    alternates: getLocaleAlternates("tools/palette-generator")
  };
}

export default async function PaletteGeneratorPage({ params }: PaletteGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getPaletteGeneratorMessages(locale);

  return <PaletteGeneratorTool messages={messages} />;
}
