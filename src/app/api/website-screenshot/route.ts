import { NextResponse } from "next/server";

const blockedHostnames = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
const privateIpPattern = /^(10\.|127\.|169\.254\.|172\.(1[6-9]|2\d|3[0-1])\.|192\.168\.)/;

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isBlockedUrl(value: string) {
  try {
    const url = new URL(value);
    return blockedHostnames.has(url.hostname) || privateIpPattern.test(url.hostname);
  } catch {
    return true;
  }
}

function buildScreenshotUrl(targetUrl: string) {
  return `https://image.thum.io/get/width/1440/crop/900/noanimate/${encodeURIComponent(targetUrl)}`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url")?.trim() ?? "";

  if (!isValidHttpUrl(targetUrl)) {
    return NextResponse.json({ error: "Invalid URL.", code: "INVALID_URL" }, { status: 400 });
  }

  if (isBlockedUrl(targetUrl)) {
    return NextResponse.json({ error: "Unsupported URL.", code: "UNSUPPORTED_URL" }, { status: 400 });
  }

  return NextResponse.json({
    imageUrl: buildScreenshotUrl(targetUrl),
    pageUrl: targetUrl,
    mode: "preview-service"
  });
}
