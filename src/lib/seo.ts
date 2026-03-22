import type { Metadata } from "next";
import { defaultLocale, localeOptions, locales, type LocaleCode } from "@/data/locales";
import { getTool } from "@/data/tools";
import { siteConfig } from "@/data/site";

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return siteConfig.baseUrl;
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL ?? siteConfig.baseUrl
  );
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}

export function buildLocalePath(locale: LocaleCode, pagePath = "") {
  if (!pagePath) {
    return `/${locale}`;
  }

  return `/${locale}/${pagePath}`;
}

export function getLocaleAlternates(locale: LocaleCode, pagePath = ""): Metadata["alternates"] {
  const languages = Object.fromEntries(locales.map((entry) => [entry, buildLocalePath(entry, pagePath)]));

  return {
    canonical: buildLocalePath(locale, pagePath),
    languages: {
      ...languages,
      "x-default": buildLocalePath(defaultLocale, pagePath)
    }
  };
}

type LocalizedMetadataInput = {
  locale: LocaleCode;
  pagePath?: string;
  title: string;
  description: string;
};

export function buildLocalizedMetadata({ locale, pagePath = "", title, description }: LocalizedMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: getLocaleAlternates(locale, pagePath)
  };
}

export function buildToolMetadata(locale: LocaleCode, slug: string): Metadata {
  const tool = getTool(locale, slug);

  return buildLocalizedMetadata({
    locale,
    pagePath: `tools/${slug}`,
    title: tool.name,
    description: tool.description
  });
}

export function getAlternateLocaleLinks(pagePath = "") {
  return localeOptions.map((locale) => ({
    hrefLang: locale.code,
    href: buildLocalePath(locale.code, pagePath)
  }));
}
