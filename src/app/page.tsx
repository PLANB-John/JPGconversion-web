import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { ToolCard } from "@/components/ToolCard";
import { categoryOrder, CATEGORY_LABELS, featuredTools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover modern online tools for color, image, marketing, and developer workflows."
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Global Tools Website</p>
        <h1 className="max-w-3xl text-3xl font-bold text-slate-900 sm:text-5xl">Simple tools for your everyday web workflow</h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          Explore a growing library of practical utilities for image editing, marketing tasks, and development helpers.
        </p>
        <Link
          href="/tools"
          className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Explore All Tools
        </Link>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Featured"
          title="Featured tools"
          description="Start with these highlighted tools. We will keep adding more based on real user needs."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          eyebrow="Categories"
          title="Browse by category"
          description="Our tool collection is organized to stay clear now and scalable for future multilingual expansion."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((category) => (
            <article key={category} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{CATEGORY_LABELS[category]}</h3>
              <p className="mt-2 text-sm text-slate-600">Useful utilities in {CATEGORY_LABELS[category].toLowerCase()}.</p>
            </article>
          ))}
        </div>
      </section>

      <p className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
        New tools are being added step by step. Check back often for updates.
      </p>
    </div>
  );
}
