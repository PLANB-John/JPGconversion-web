import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PunycodeConverterTool } from "@/components/tools/PunycodeConverterTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getPunycodeConverterMessages } from "@/data/punycodeConverterMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type PunycodeConverterPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PunycodeConverterPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "punycode-converter");
}

export default async function PunycodeConverterPage({ params }: PunycodeConverterPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getPunycodeConverterMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "what-does-xn-mean-in-domain",
    "unicode-domains-vs-punycode",
    "check-whether-domain-is-punycode",
    "when-to-encode-url-and-when-not-to",
    "spaces-symbols-and-query-strings-url-encoding",
    "fix-broken-links-caused-by-url-encoding"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <PunycodeConverterTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
