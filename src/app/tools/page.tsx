import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolCard } from "@/components/ToolCard";
import { toolsByCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description: "Browse all available and upcoming tools grouped by category."
};

export default function ToolsPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        eyebrow="All Tools"
        title="Explore tools by category"
        description="A clear list of current and upcoming tools. Start with available tools, and track what is coming next."
      />

      {toolsByCategory.map((group) => (
        <section key={group.key} className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{group.label}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
