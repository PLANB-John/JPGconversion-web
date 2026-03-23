import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolCard } from "@/components/ToolCard";
import { getGuidesByCategory, getGuidesIndexMessages } from "@/data/guides";
import { locales } from "@/data/locales";
import { getMessages } from "@/data/messages";
import { getSiteExperience, type CategoryPageSlug, categorySlugToToolCategory, toolCategoryToCategorySlug } from "@/data/siteExperience";
import { getLocalizedTools, liveToolRoutes, type ToolCategory } from "@/data/tools";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const categorySlugs = ["color-image", "web-marketing", "developer-tools"] as const satisfies CategoryPageSlug[];

function isCategorySlug(value: string): value is CategoryPageSlug {
  return categorySlugs.includes(value as CategoryPageSlug);
}

function getRelatedCategorySlugs(category: ToolCategory) {
  return (Object.keys(toolCategoryToCategorySlug) as ToolCategory[])
    .filter((entry) => entry !== category)
    .map((entry) => toolCategoryToCategorySlug[entry]);
}

export function generateStaticParams() {
  return locales.flatMap((locale) => categorySlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale) || !isCategorySlug(slug)) {
    return {};
  }

  const messages = getMessages(locale);
  const experience = getSiteExperience(locale);
  const category = categorySlugToToolCategory[slug];

  return buildLocalizedMetadata({
    locale,
    pagePath: `categories/${slug}`,
    title: `${messages.tool.categories[category]} | ${experience.category.metadataTitle}`,
    description: `${messages.tools.categoryDescriptions[category]} ${experience.category.metadataDescription}`
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale) || !isCategorySlug(slug)) {
    notFound();
  }

  const messages = getMessages(locale);
  const experience = getSiteExperience(locale);
  const guidesMessages = getGuidesIndexMessages(locale);
  const category = categorySlugToToolCategory[slug];
  const categoryLabel = messages.tool.categories[category];
  const tools = getLocalizedTools(locale).filter((tool) => tool.category === category);
  const guides = getGuidesByCategory(locale, category);
  const relatedCategories = getRelatedCategorySlugs(category);

  return (
    <div className="space-y-12">
      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{messages.home.categoriesEyebrow}</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-5xl">{categoryLabel}</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{messages.tools.categoryDescriptions[category]}</p>
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{experience.category.introTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {messages.tools.categoryDescriptions[category]} {experience.home.howDescription}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold text-slate-900">{experience.category.highlightsTitle}</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
              {experience.category.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow={messages.tools.eyebrow} title={experience.category.toolsTitle} description={messages.tools.categoryDescriptions[category]} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const route = liveToolRoutes[tool.slug];
            const href = route ? `/${locale}/tools/${route}` : undefined;

            return (
              <ToolCard
                key={tool.slug}
                tool={tool}
                statusLabel={messages.tool.status[tool.status]}
                actionLabel={href ? messages.tool.action.open : messages.tool.action.comingSoon}
                href={href}
              />
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle eyebrow={experience.home.guidesEyebrow} title={experience.category.guidesTitle} description={experience.home.guidesDescription} />
        {guides.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.slug} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{guide.content.categoryLabel}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{guide.content.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.content.description}</p>
                <Link
                  href={`/${locale}/guides/${guide.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline underline-offset-4"
                >
                  {guidesMessages.cardAction}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-600">{experience.category.guidesEmpty}</p>
        )}
      </section>

      <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-7">
        <SectionTitle eyebrow={messages.home.categoriesEyebrow} title={experience.category.relatedLinksTitle} description={experience.home.howDescription} />
        <div className="grid gap-4 lg:grid-cols-3">
          <Link href={`/${locale}/tools`} className="rounded-xl border border-slate-200 p-5 transition hover:bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">{experience.category.allToolsLabel}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{messages.tools.description}</p>
          </Link>
          <Link href={`/${locale}/guides`} className="rounded-xl border border-slate-200 p-5 transition hover:bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">{experience.category.allGuidesLabel}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{experience.home.guidesDescription}</p>
          </Link>
          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900">{experience.category.relatedCategoriesLabel}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedCategories.map((entry) => {
                const relatedCategory = categorySlugToToolCategory[entry];

                return (
                  <Link
                    key={entry}
                    href={`/${locale}/categories/${entry}`}
                    className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    {messages.tool.categories[relatedCategory]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
