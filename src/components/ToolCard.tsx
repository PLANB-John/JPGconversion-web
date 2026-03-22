import Link from "next/link";
import type { ToolItem } from "@/data/tools";

type ToolCardProps = {
  tool: ToolItem;
  statusLabel: string;
  actionLabel: string;
  href?: string;
};

const statusClasses: Record<ToolItem["status"], string> = {
  Available: "bg-emerald-100 text-emerald-700",
  "Coming Soon": "bg-amber-100 text-amber-700"
};

export function ToolCard({ tool, statusLabel, actionLabel, href }: ToolCardProps) {
  const content = (
    <div className="flex h-full flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{tool.name}</h3>
          <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${statusClasses[tool.status]}`}>
            {statusLabel}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{tool.description}</p>
      </div>
      <p className="text-sm font-medium text-slate-500">{href ? `${actionLabel} →` : actionLabel}</p>
    </div>
  );

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      {href ? (
        <Link
          href={href}
          className="h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
