import type { MetadataRoute } from "next";
import { getAllGuideSlugs, getGuide } from "@/data/guides";
import { defaultLocale, locales } from "@/data/locales";
import { siteConfig } from "@/data/site";
import { getAllLiveToolSlugs } from "@/data/tools";
import { buildLocalePath, getSiteUrl } from "@/lib/seo";

const staticLocalizedPages = ["", "tools", "guides", "about", "contact", "privacy-policy", "terms-of-use"] as const;
const categoryPages = ["color-image", "web-marketing", "developer-tools"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const toolSlugs = getAllLiveToolSlugs();
  const guideSlugs = getAllGuideSlugs();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const pagePath of staticLocalizedPages) {
      entries.push({
        url: `${siteUrl}${buildLocalePath(locale, pagePath)}`,
        lastModified: now,
        changeFrequency: siteConfig.defaultChangeFrequency,
        priority: pagePath === "" ? (locale === defaultLocale ? 1 : 0.9) : locale === defaultLocale ? 0.85 : 0.75
      });
    }

    for (const slug of categoryPages) {
      entries.push({
        url: `${siteUrl}${buildLocalePath(locale, `categories/${slug}`)}`,
        lastModified: now,
        changeFrequency: siteConfig.defaultChangeFrequency,
        priority: 0.8
      });
    }

    for (const slug of toolSlugs) {
      entries.push({
        url: `${siteUrl}${buildLocalePath(locale, `tools/${slug}`)}`,
        lastModified: now,
        changeFrequency: siteConfig.defaultChangeFrequency,
        priority: 0.8
      });
    }

    for (const slug of guideSlugs) {
      const guide = getGuide(locale, slug);

      entries.push({
        url: `${siteUrl}${buildLocalePath(locale, `guides/${slug}`)}`,
        lastModified: guide?.updatedAt ?? now,
        changeFrequency: "monthly",
        priority: 0.75
      });
    }
  }

  return entries;
}
