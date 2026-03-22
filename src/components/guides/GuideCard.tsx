import Link from "next/link";
import type { GuideItem } from "@/data/guides";

type GuideCardProps = {
  guide: GuideItem;
  href: string;
  actionLabel: string;
  categoryPrefix: string;
};

export function GuideCard({ guide, href, actionLabel, categoryPrefix }: GuideCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {categoryPrefix}: {guide.content.categoryLabel}
        </p>
        <h2 className="text-xl font-semibold text-slate-900">{guide.content.title}</h2>
        <p className="text-sm leading-6 text-slate-600">{guide.content.description}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-500">{guide.updatedAt}</p>
        <Link href={href} className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700">
          {actionLabel}
        </Link>
      </div>
    </article>
  );
}
