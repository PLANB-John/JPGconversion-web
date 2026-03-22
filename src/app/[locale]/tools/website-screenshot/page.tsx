import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebsiteScreenshotTool } from "@/components/tools/WebsiteScreenshotTool";
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

  return <WebsiteScreenshotTool messages={messages} />;
}
