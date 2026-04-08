import Link from "next/link";

type Props = {
  sectionTitle?: string;
  sectionDescription?: string;
  whenToUseTitle: string;
  whenToUseItems: string[];
  quickStepsTitle: string;
  quickSteps: string[];
  commonMistakesTitle: string;
  commonMistakes: string[];
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  relatedGuides: Array<{ slug: string; title: string }>;
  locale: string;
};

export function ToolHubSupportSection({
  sectionTitle,
  sectionDescription,
  whenToUseTitle,
  whenToUseItems,
  quickStepsTitle,
  quickSteps,
  commonMistakesTitle,
  commonMistakes,
  relatedGuidesTitle,
  relatedGuidesDescription,
  relatedGuides,
  locale
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {sectionTitle && <h2 className="text-lg font-semibold text-slate-900">{sectionTitle}</h2>}
      {sectionDescription && <p className="mt-2 text-sm text-slate-600">{sectionDescription}</p>}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">{whenToUseTitle}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {whenToUseItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">{quickStepsTitle}</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {quickSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </div>

      <article className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-900">{commonMistakesTitle}</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {commonMistakes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-900">{relatedGuidesTitle}</h3>
        <p className="mt-1 text-sm text-slate-600">{relatedGuidesDescription}</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {relatedGuides.map((guide) => (
            <li key={guide.slug}>
              <Link className="text-sm font-medium text-slate-700 underline-offset-2 hover:text-slate-900 hover:underline" href={`/${locale}/guides/${guide.slug}`}>
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
