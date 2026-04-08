import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CharacterCounterTool } from "@/components/tools/CharacterCounterTool";
import { getGuide, type GuideSlug } from "@/data/guides";
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
  const relatedGuideSlugs: GuideSlug[] = [
    "how-to-count-characters-for-seo",
    "meta-title-length-guide",
    "meta-description-length-for-ctr",
    "check-character-count-before-publishing",
    "blog-title-length-for-readability",
    "write-shorter-titles-without-being-vague",
    "character-count-for-social-captions",
    "shorten-blog-title-keep-main-keyword"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <CharacterCounterTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
