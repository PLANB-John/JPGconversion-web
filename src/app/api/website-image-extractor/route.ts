import { NextResponse } from "next/server";

type ExtractedImage = {
  url: string;
  source: string;
};

const imageFilePattern = /\.(avif|bmp|gif|ico|jpe?g|png|svg|webp)(\?|#|$)/i;

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

function resolveCandidateUrl(rawValue: string, baseUrl: string) {
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

function collectMatches(html: string, expression: RegExp, baseUrl: string, source: string, results: Map<string, ExtractedImage>) {
  for (const match of html.matchAll(expression)) {
    const candidate = match[1] ?? match[2] ?? "";
    const resolvedUrl = resolveCandidateUrl(candidate, baseUrl);

    if (!resolvedUrl || results.has(resolvedUrl)) {
      continue;
    }

    results.set(resolvedUrl, {
      url: resolvedUrl,
      source
    });
  }
}

function extractImagesFromHtml(html: string, baseUrl: string) {
  const results = new Map<string, ExtractedImage>();

  collectMatches(html, /<meta[^>]+(?:property|name)=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["'][^>]*>/gi, baseUrl, "og:image", results);
  collectMatches(html, /<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']og:image(?::secure_url)?["'][^>]*>/gi, baseUrl, "og:image", results);
  collectMatches(html, /<meta[^>]+(?:property|name)=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["'][^>]*>/gi, baseUrl, "twitter:image", results);
  collectMatches(html, /<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']twitter:image(?::src)?["'][^>]*>/gi, baseUrl, "twitter:image", results);
  collectMatches(html, /<img[^>]+src=["']([^"']+)["'][^>]*>/gi, baseUrl, "img src", results);

  return Array.from(results.values()).filter((image) => imageFilePattern.test(image.url) || image.source !== "img src");
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
        "user-agent": "Mozilla/5.0 (compatible; WebsiteImageExtractor/1.0; +https://example.com)",
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
    const images = extractImagesFromHtml(html, pageUrl);

    return NextResponse.json({ images, pageUrl });
  } catch {
    return NextResponse.json({ error: "Unable to fetch page." }, { status: 500 });
  }
}
