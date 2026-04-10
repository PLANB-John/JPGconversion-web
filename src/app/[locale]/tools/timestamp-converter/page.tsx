import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TimestampConverterTool } from "@/components/tools/TimestampConverterTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getTimestampConverterMessages } from "@/data/timestampConverterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type TimestampConverterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TimestampConverterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "timestamp-converter");
}

export default async function TimestampConverterPage({ params }: TimestampConverterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getTimestampConverterMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "how-to-convert-timestamps-quickly",
    "unix-timestamp-seconds-vs-milliseconds",
    "convert-api-timestamps-to-readable-dates",
    "why-your-timestamp-looks-wrong-in-javascript",
    "debug-timezone-confusion-in-timestamps",
    "api-dates-vs-unix-timestamps",
    "spot-seconds-vs-milliseconds-bug",
    "timestamp-looks-right-but-timezone-is-wrong"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <TimestampConverterTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
