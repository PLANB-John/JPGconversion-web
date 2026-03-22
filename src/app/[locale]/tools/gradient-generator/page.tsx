import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GradientGeneratorTool } from "@/components/tools/GradientGeneratorTool";
import { getGradientGeneratorMessages } from "@/data/gradientGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type GradientGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: GradientGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "gradient-generator");
}

export default async function GradientGeneratorPage({ params }: GradientGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getGradientGeneratorMessages(locale);

  return <GradientGeneratorTool messages={messages} />;
}
