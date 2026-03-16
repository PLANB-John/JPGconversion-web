import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CssVariableGeneratorTool } from "@/components/tools/CssVariableGeneratorTool";
import { getCssVariableGeneratorMessages } from "@/data/cssVariableGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

type CssVariableGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CssVariableGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getCssVariableGeneratorMessages(locale);

  return {
    title: messages.metadataTitle,
    description: messages.metadataDescription,
    alternates: getLocaleAlternates("tools/css-variable-generator")
  };
}

export default async function CssVariableGeneratorPage({ params }: CssVariableGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getCssVariableGeneratorMessages(locale);

  return <CssVariableGeneratorTool messages={messages} />;
}
