import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuidesIndexMessages } from "@/data/guides";
import { getMessages, getTrustMessages } from "@/data/messages";
import { getSiteExperience } from "@/data/siteExperience";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const page = getTrustMessages(locale).legal.about;

  return buildLocalizedMetadata({
    locale,
    pagePath: "about",
    title: page.title,
    description: page.description
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getTrustMessages(locale).legal.about;
  const messages = getMessages(locale);
  const guides = getGuidesIndexMessages(locale);
  const experience = getSiteExperience(locale);

  return (
    <article className="mx-auto max-w-4xl space-y-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{experience.trust.informationLabel}</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{page.title}</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{page.description}</p>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{page.intro}</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">{experience.trust.aboutHighlightsTitle}</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 sm:text-base">
          {experience.trust.aboutHighlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-8">
        {page.sections.map((section) => (
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

      <section className="space-y-4 rounded-2xl border border-slate-200 p-5">
        <h2 className="text-lg font-semibold text-slate-900">{experience.trust.aboutQuickLinksTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href={`/${locale}/guides`} className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
            <h3 className="font-semibold text-slate-900">{guides.navLabel}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{guides.description}</p>
          </Link>
          <Link href={`/${locale}/tools`} className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
            <h3 className="font-semibold text-slate-900">{messages.nav.tools}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{messages.tools.description}</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
