import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolCard } from "@/components/ToolCard";
import { categoryOrder, tools } from "@/data/tools";
import { getMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";

type ToolsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ToolsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return {
    title: messages.metadata.toolsTitle,
    description: messages.metadata.toolsDescription,
    alternates: getLocaleAlternates("tools")
  };
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <div className="space-y-12">
      <SectionTitle eyebrow={messages.tools.eyebrow} title={messages.tools.title} description={messages.tools.description} />

      {categoryOrder.map((category) => {
        const groupedTools = tools.filter((tool) => tool.category === category);

        return (
          <section key={category} className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{messages.tool.categories[category]}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupedTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} statusLabel={messages.tool.status[tool.status]} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
