import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { GuideCard } from "@/components/guides/GuideCard";
import { getGuides, getGuidesIndexMessages } from "@/data/guides";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type GuidesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: GuidesPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getGuidesIndexMessages(locale);

  return buildLocalizedMetadata({
    locale,
    pagePath: "guides",
    title: messages.metadataTitle,
    description: messages.metadataDescription
  });
}

export default async function GuidesPage({ params }: GuidesPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getGuidesIndexMessages(locale);
  const guides = getGuides(locale);

  return (
    <div className="space-y-10">
      <SectionTitle eyebrow={messages.eyebrow} title={messages.title} description={messages.description} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard
            key={guide.slug}
            guide={guide}
            href={`/${locale}/guides/${guide.slug}`}
            actionLabel={messages.cardAction}
            categoryPrefix={messages.cardCategoryPrefix}
          />
        ))}
      </div>
    </div>
  );
}
