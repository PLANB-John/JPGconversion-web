type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}
