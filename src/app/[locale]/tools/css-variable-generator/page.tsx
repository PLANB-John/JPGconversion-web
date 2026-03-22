import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CssVariableGeneratorTool } from "@/components/tools/CssVariableGeneratorTool";
import { getCssVariableGeneratorMessages } from "@/data/cssVariableGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type CssVariableGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CssVariableGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "css-variable-generator");
}

export default async function CssVariableGeneratorPage({ params }: CssVariableGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getCssVariableGeneratorMessages(locale);

  return <CssVariableGeneratorTool messages={messages} />;
}
