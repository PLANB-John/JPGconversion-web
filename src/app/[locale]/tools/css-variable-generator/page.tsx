import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CssVariableGeneratorTool } from "@/components/tools/CssVariableGeneratorTool";
import { getGuide, type GuideSlug } from "@/data/guides";
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
  const relatedGuideSlugs: GuideSlug[] = [
    "use-css-variables-for-repeated-colors",
    "css-variables-vs-hardcoded-values",
    "organize-css-variables-for-small-website",
    "create-basic-website-color-palette",
    "build-consistent-color-palette",
    "match-website-colors-consistently"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <CssVariableGeneratorTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
