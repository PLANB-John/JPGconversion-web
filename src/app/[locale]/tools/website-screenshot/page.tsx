import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebsiteScreenshotTool } from "@/components/tools/WebsiteScreenshotTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getWebsiteScreenshotMessages } from "@/data/websiteScreenshotMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type WebsiteScreenshotPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WebsiteScreenshotPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "website-screenshot");
}

export default async function WebsiteScreenshotPage({ params }: WebsiteScreenshotPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getWebsiteScreenshotMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "website-screenshot-guide",
    "full-page-website-screenshot",
    "capture-website-previews-for-clients",
    "website-screenshot-vs-screen-recording",
    "website-screenshot-mistakes",
    "capture-website-preview-before-sharing",
    "use-website-screenshots-in-client-feedback",
    "full-page-vs-cropped-website-screenshot"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <WebsiteScreenshotTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
