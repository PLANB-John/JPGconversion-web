import { NextResponse } from "next/server";

type OgPreviewMetadata = {
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogUrl: string | null;
  ogType: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  twitterCard: string | null;
  title: string | null;
  metaDescription: string | null;
};

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function decodeHtmlValue(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function stripTags(value: string) {
  return decodeHtmlValue(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

function matchMetaContent(html: string, selectors: string[]) {
  for (const selector of selectors) {
    const patterns = [
      new RegExp(`<meta[^>]+(?:property|name)=["']${selector}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"),
      new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${selector}["'][^>]*>`, "i")
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);

      if (match?.[1]) {
        return decodeHtmlValue(match[1]);
      }
    }
  }

  return null;
}

function matchTitle(html: string) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match?.[1] ? stripTags(match[1]) : null;
}

function resolveCandidateUrl(rawValue: string | null, baseUrl: string) {
  if (!rawValue) {
    return null;
  }

  const cleanedValue = decodeHtmlValue(rawValue);

  if (!cleanedValue || cleanedValue.startsWith("data:") || cleanedValue.startsWith("javascript:")) {
    return null;
  }

  try {
    const resolvedUrl = new URL(cleanedValue, baseUrl);
    return resolvedUrl.protocol === "http:" || resolvedUrl.protocol === "https:" ? resolvedUrl.toString() : null;
  } catch {
    return null;
  }
}

function extractMetadata(html: string, pageUrl: string): OgPreviewMetadata {
  return {
    ogTitle: matchMetaContent(html, ["og:title"]),
    ogDescription: matchMetaContent(html, ["og:description"]),
    ogImage: resolveCandidateUrl(matchMetaContent(html, ["og:image", "og:image:secure_url"]), pageUrl),
    ogUrl: resolveCandidateUrl(matchMetaContent(html, ["og:url"]), pageUrl),
    ogType: matchMetaContent(html, ["og:type"]),
    twitterTitle: matchMetaContent(html, ["twitter:title"]),
    twitterDescription: matchMetaContent(html, ["twitter:description"]),
    twitterImage: resolveCandidateUrl(matchMetaContent(html, ["twitter:image", "twitter:image:src"]), pageUrl),
    twitterCard: matchMetaContent(html, ["twitter:card"]),
    title: matchTitle(html),
    metaDescription: matchMetaContent(html, ["description"])
  };
}

function hasAnyMetadata(metadata: OgPreviewMetadata) {
  return Object.values(metadata).some(Boolean);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url")?.trim() ?? "";

  if (!isValidHttpUrl(targetUrl)) {
    return NextResponse.json({ error: "Invalid URL." }, { status: 400 });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; OgPreviewTool/1.0; +https://example.com)",
        accept: "text/html,application/xhtml+xml"
      },
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch page." }, { status: 400 });
    }

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
      return NextResponse.json({ error: "Unsupported content type." }, { status: 400 });
    }

    const html = await response.text();
    const pageUrl = response.url || targetUrl;
    const metadata = extractMetadata(html, pageUrl);

    if (!hasAnyMetadata(metadata)) {
      return NextResponse.json({ metadata, requestedUrl: targetUrl, pageUrl }, { status: 200 });
    }

    return NextResponse.json({ metadata, requestedUrl: targetUrl, pageUrl });
  } catch {
    return NextResponse.json({ error: "Unable to fetch page." }, { status: 500 });
  }
}
