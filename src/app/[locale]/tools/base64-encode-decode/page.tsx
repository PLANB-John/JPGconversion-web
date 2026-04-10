import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Base64EncodeDecodeTool } from "@/components/tools/Base64EncodeDecodeTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getBase64EncodeDecodeMessages } from "@/data/base64EncodeDecodeMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type Base64EncodeDecodePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Base64EncodeDecodePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  return buildToolMetadata(locale, "base64-encode-decode");
}

export default async function Base64EncodeDecodePage({ params }: Base64EncodeDecodePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getBase64EncodeDecodeMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "when-to-use-base64-encoding",
    "base64-vs-url-encoding",
    "how-to-decode-base64-safely-for-debugging",
    "common-base64-mistakes-in-web-workflows",
    "when-plain-text-is-better-than-base64",
    "why-base64-strings-get-so-long",
    "tell-whether-string-is-base64",
    "when-base64-makes-debugging-harder"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <Base64EncodeDecodeTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
