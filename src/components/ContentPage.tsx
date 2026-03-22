type ContentSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

type ContentPageProps = {
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
};

export function ContentPage({ title, description, intro, sections }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-4xl space-y-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Information</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{intro}</p>
      </header>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <div className="space-y-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
