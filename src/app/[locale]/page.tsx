import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolCard } from "@/components/ToolCard";
import { categoryOrder, featuredTools } from "@/data/tools";
import { getMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return {
    title: messages.metadata.homeTitle,
    description: messages.metadata.homeDescription,
    alternates: {
      canonical: `/${locale}`
    }
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <div className="space-y-16">
      <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{messages.home.eyebrow}</p>
        <h1 className="max-w-3xl text-3xl font-bold text-slate-900 sm:text-5xl">{messages.home.title}</h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">{messages.home.description}</p>
        <Link
          href={`/${locale}/tools`}
          className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {messages.home.cta}
        </Link>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow={messages.home.featuredEyebrow}
          title={messages.home.featuredTitle}
          description={messages.home.featuredDescription}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} statusLabel={messages.tool.status[tool.status]} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow={messages.home.categoriesEyebrow}
          title={messages.home.categoriesTitle}
          description={messages.home.categoriesDescription}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((category) => {
            const categoryLabel = messages.tool.categories[category];

            return (
              <article key={category} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{categoryLabel}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {messages.home.categoryCardDescription.replace("{category}", categoryLabel.toLowerCase())}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <p className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">{messages.home.announcement}</p>
    </div>
  );
}
