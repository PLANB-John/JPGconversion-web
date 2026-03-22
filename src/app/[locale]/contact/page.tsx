import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrustMessages } from "@/data/messages";
import { isValidLocale } from "@/lib/i18n";
import { buildLocalizedMetadata } from "@/lib/seo";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const page = getTrustMessages(locale).contact;

  return buildLocalizedMetadata({
    locale,
    pagePath: "contact",
    title: page.title,
    description: page.description
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getTrustMessages(locale).contact;

  return (
    <article className="mx-auto max-w-4xl space-y-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Support</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{page.title}</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{page.description}</p>
        <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{page.intro}</p>
      </header>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-semibold text-slate-900">{page.emailLabel}</p>
        <a href={`mailto:${page.emailValue}`} className="mt-2 inline-flex text-base font-medium text-slate-900 underline underline-offset-4">
          {page.emailValue}
        </a>
        <p className="mt-2 text-sm leading-6 text-slate-600">{page.emailHelp}</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-900">{page.replaceTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{page.replaceBody}</p>
        </section>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-900">{page.responseTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{page.responseBody}</p>
        </section>
      </div>
    </article>
  );
}
