import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebsiteImageExtractorTool } from "@/components/tools/WebsiteImageExtractorTool";
import { getWebsiteImageExtractorMessages } from "@/data/websiteImageExtractorMessages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

type WebsiteImageExtractorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WebsiteImageExtractorPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getWebsiteImageExtractorMessages(locale);

  return {
    title: messages.metadataTitle,
    description: messages.metadataDescription,
    alternates: getLocaleAlternates("tools/website-image-extractor")
  };
}

export default async function WebsiteImageExtractorPage({ params }: WebsiteImageExtractorPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getWebsiteImageExtractorMessages(locale);

  return <WebsiteImageExtractorTool messages={messages} />;
}
