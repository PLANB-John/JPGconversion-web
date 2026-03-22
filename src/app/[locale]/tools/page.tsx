import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolCard } from "@/components/ToolCard";
import { getToolsByCategory, liveToolRoutes } from "@/data/tools";
import { getMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type ToolsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ToolsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return buildLocalizedMetadata({
    locale,
    pagePath: "tools",
    title: messages.metadata.toolsTitle,
    description: messages.metadata.toolsDescription
  });
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);
  const toolsByCategory = getToolsByCategory(locale);

  return (
    <div className="space-y-12">
      <SectionTitle eyebrow={messages.tools.eyebrow} title={messages.tools.title} description={messages.tools.description} />

      {toolsByCategory.map((category) => (
        <section key={category.key} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{messages.tool.categories[category.key]}</h2>
            <p className="max-w-3xl text-sm leading-6 text-slate-600">{messages.tools.categoryDescriptions[category.key]}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((tool) => {
              const route = liveToolRoutes[tool.slug];
              const href = route ? `/${locale}/tools/${route}` : undefined;
              const actionLabel = href ? messages.tool.action.open : messages.tool.action.comingSoon;

              return (
                <ToolCard
                  key={tool.slug}
                  tool={tool}
                  statusLabel={messages.tool.status[tool.status]}
                  actionLabel={actionLabel}
                  href={href}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
