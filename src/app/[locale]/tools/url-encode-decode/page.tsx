import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UrlEncodeDecodeTool } from "@/components/tools/UrlEncodeDecodeTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getUrlEncodeDecodeMessages } from "@/data/urlEncodeDecodeMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type UrlEncodeDecodePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: UrlEncodeDecodePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "url-encode-decode");
}

export default async function UrlEncodeDecodePage({ params }: UrlEncodeDecodePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getUrlEncodeDecodeMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "when-to-encode-url-and-when-not-to",
    "fix-broken-links-caused-by-url-encoding",
    "spaces-symbols-and-query-strings-url-encoding",
    "base64-vs-url-encoding",
    "how-to-build-utm-links",
    "check-tagged-url-before-sharing",
    "use-utm-links-without-breaking-reporting"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <UrlEncodeDecodeTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
