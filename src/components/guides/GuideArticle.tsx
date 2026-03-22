import Link from "next/link";
import type { GuideItem } from "@/data/guides";
import type { ToolItem } from "@/data/tools";

type GuideArticleProps = {
  guide: GuideItem;
  locale: string;
  eyebrow: string;
  backToGuides: string;
  relatedToolsTitle: string;
  relatedGuidesTitle: string;
  relatedGuidesDescription: string;
  relatedGuides: GuideItem[];
  relatedTool?: ToolItem;
};

export function GuideArticle({
  guide,
  locale,
  eyebrow,
  backToGuides,
  relatedToolsTitle,
  relatedGuidesTitle,
  relatedGuidesDescription,
  relatedGuides,
  relatedTool
}: GuideArticleProps) {
  return (
    <div className="space-y-8">
      <Link href={`/${locale}/guides`} className="inline-flex text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900">
        {backToGuides}
      </Link>

      <article className="mx-auto max-w-4xl space-y-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <header className="space-y-4 border-b border-slate-200 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{guide.content.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{guide.content.description}</p>
          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{guide.content.intro}</p>
        </header>

        <div className="space-y-8">
          {guide.content.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
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

          <section className="space-y-3 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">{guide.content.useCasesTitle}</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:text-base">
              {guide.content.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-xl font-semibold text-slate-900">{guide.content.closingTitle}</h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">{guide.content.closingText}</p>
          </section>
        </div>
      </article>

      {relatedTool ? (
        <section className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">{relatedToolsTitle}</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-900">{relatedTool.name}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{relatedTool.description}</p>
            </div>
            <Link
              href={`/${locale}/tools/${relatedTool.slug}`}
              className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {guide.content.relatedToolLabel ?? relatedTool.name}
            </Link>
          </div>
        </section>
      ) : null}

      {relatedGuides.length > 0 ? (
        <section className="mx-auto max-w-4xl space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">{relatedGuidesTitle}</h2>
            <p className="text-sm leading-6 text-slate-600">{relatedGuidesDescription}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedGuides.map((relatedGuide) => (
              <Link
                key={relatedGuide.slug}
                href={`/${locale}/guides/${relatedGuide.slug}`}
                className="rounded-xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{relatedGuide.content.categoryLabel}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{relatedGuide.content.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{relatedGuide.content.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
