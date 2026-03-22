import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { getAllGuideSlugs, getGuide, getGuideRelatedTool, getGuidesIndexMessages, getRelatedGuides } from "@/data/guides";
import { locales } from "@/data/locales";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type GuideDetailProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => getAllGuideSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: GuideDetailProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const guide = getGuide(locale, slug);

  if (!guide) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    pagePath: `guides/${slug}`,
    title: guide.content.title,
    description: guide.content.description
  });
}

export default async function GuideDetailPage({ params }: GuideDetailProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const guide = getGuide(locale, slug);

  if (!guide) {
    notFound();
  }

  const messages = getGuidesIndexMessages(locale);
  const relatedGuides = getRelatedGuides(locale, slug);
  const relatedTool = getGuideRelatedTool(locale, slug);

  return (
    <GuideArticle
      guide={guide}
      locale={locale}
      eyebrow={messages.articleEyebrow}
      backToGuides={messages.backToGuides}
      relatedToolsTitle={messages.relatedToolsTitle}
      relatedGuidesTitle={messages.relatedGuidesTitle}
      relatedGuidesDescription={messages.relatedGuidesDescription}
      relatedGuides={relatedGuides}
      relatedTool={relatedTool}
    />
  );
}
