import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getJsonFormatterMessages } from "@/data/jsonFormatterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type JsonFormatterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: JsonFormatterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "json-formatter");
}

export default async function JsonFormatterPage({ params }: JsonFormatterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getJsonFormatterMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "json-formatting-basics",
    "how-to-use-a-json-formatter-for-debugging",
    "json-parse-error-examples",
    "validate-json-before-api-requests",
    "minified-vs-pretty-json",
    "why-json-breaks-after-copy-paste",
    "read-json-errors-more-quickly",
    "when-to-use-minified-vs-pretty-json"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <JsonFormatterTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
