import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HashGeneratorTool } from "@/components/tools/HashGeneratorTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getHashGeneratorMessages } from "@/data/hashGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type HashGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HashGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "hash-generator");
}

export default async function HashGeneratorPage({ params }: HashGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getHashGeneratorMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "md5-vs-sha256",
    "compare-hashes-to-check-data-changes",
    "why-two-hashes-are-different",
    "when-to-use-base64-encoding",
    "tell-whether-string-is-base64",
    "why-json-breaks-after-copy-paste"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <HashGeneratorTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
