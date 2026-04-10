import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GradientGeneratorTool } from "@/components/tools/GradientGeneratorTool";
import { getGuide, type GuideSlug } from "@/data/guides";
import { getGradientGeneratorMessages } from "@/data/gradientGeneratorMessages";
import { isValidLocale } from "@/lib/i18n";
import { buildToolMetadata } from "@/lib/seo";

type GradientGeneratorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: GradientGeneratorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }
  return buildToolMetadata(locale, "gradient-generator");
}

export default async function GradientGeneratorPage({ params }: GradientGeneratorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getGradientGeneratorMessages(locale);
  const relatedGuideSlugs: GuideSlug[] = [
    "gradient-generator-guide",
    "create-simple-css-gradient-background",
    "linear-vs-radial-gradient",
    "when-gradients-improve-ui",
    "common-gradient-mistakes-ui",
    "use-gradients-without-busy-ui",
    "best-places-to-use-gradients-on-website",
    "test-gradient-before-using-in-production"
  ];
  const relatedGuides = relatedGuideSlugs
    .map((slug) => {
      const guide = getGuide(locale, slug);
      return guide ? { slug, title: guide.content.title } : null;
    })
    .filter((guide): guide is { slug: GuideSlug; title: string } => guide !== null);

  return <GradientGeneratorTool messages={messages} locale={locale} relatedGuides={relatedGuides} />;
}
