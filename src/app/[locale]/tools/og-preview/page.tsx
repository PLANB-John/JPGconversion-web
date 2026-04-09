import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OgPreviewTool } from "@/components/tools/OgPreviewTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getOgPreviewMessages } from "@/data/ogPreviewMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type OgPreviewPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: OgPreviewPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "og-preview");
}

export default async function OgPreviewPage({ params }: OgPreviewPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getOgPreviewMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "how-to-check-open-graph-metadata",
    "open-graph-image-size-guide",
    "fix-missing-social-preview-images",
    "why-link-preview-title-looks-wrong",
    "update-open-graph-after-page-edits",
    "why-link-preview-description-looks-wrong",
    "test-open-graph-changes-before-sharing",
    "common-open-graph-tag-mistakes"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <OgPreviewTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
