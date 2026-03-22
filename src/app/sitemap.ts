import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/data/locales";
import { siteConfig } from "@/data/site";
import { getAllGuideSlugs } from "@/data/guides";
import { getAllLiveToolSlugs } from "@/data/tools";
import { buildLocalePath, getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const toolSlugs = getAllLiveToolSlugs();
  const guideSlugs = getAllGuideSlugs();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${siteUrl}${buildLocalePath(locale)}`,
      changeFrequency: siteConfig.defaultChangeFrequency,
      priority: locale === defaultLocale ? 1 : 0.9
    });

    entries.push({
      url: `${siteUrl}${buildLocalePath(locale, "tools")}`,
      changeFrequency: siteConfig.defaultChangeFrequency,
      priority: locale === defaultLocale ? 0.9 : 0.8
    });

    entries.push({
      url: `${siteUrl}${buildLocalePath(locale, "guides")}`,
      changeFrequency: siteConfig.defaultChangeFrequency,
      priority: locale === defaultLocale ? 0.85 : 0.75
    });

    for (const slug of toolSlugs) {
      entries.push({
        url: `${siteUrl}${buildLocalePath(locale, `tools/${slug}`)}`,
        changeFrequency: siteConfig.defaultChangeFrequency,
        priority: 0.8
      });
    }

    for (const slug of guideSlugs) {
      entries.push({
        url: `${siteUrl}${buildLocalePath(locale, `guides/${slug}`)}`,
        changeFrequency: siteConfig.defaultChangeFrequency,
        priority: 0.75
      });
    }
  }

  return entries;
}
