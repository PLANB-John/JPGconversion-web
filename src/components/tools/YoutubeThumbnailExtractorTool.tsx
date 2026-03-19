"use client";

import { useEffect, useMemo, useState } from "react";
import type { YoutubeThumbnailExtractorMessages } from "@/data/youtubeThumbnailExtractorMessages";

type Props = {
  messages: YoutubeThumbnailExtractorMessages;
};

type ThumbnailKey = "default" | "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault";

type ThumbnailItem = {
  key: ThumbnailKey;
  label: string;
  url: string;
};

const sampleUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const thumbnailOrder: ThumbnailKey[] = ["default", "mqdefault", "hqdefault", "sddefault", "maxresdefault"];

function extractYoutubeVideoId(value: string) {
  const input = value.trim();

  if (!input) {
    return null;
  }

  const normalizedInput = input.startsWith("http://") || input.startsWith("https://") ? input : `https://${input}`;

  try {
    const url = new URL(normalizedInput);
    const hostname = url.hostname.replace(/^www\./, "").toLowerCase();

    if (hostname === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (url.pathname === "/watch") {
        return url.searchParams.get("v");
      }

      const parts = url.pathname.split("/").filter(Boolean);
      const routeName = parts[0];

      if (["shorts", "embed", "live"].includes(routeName)) {
        return parts[1] ?? null;
      }
    }
  } catch {
    const match = input.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([A-Za-z0-9_-]{11})/);
    return match?.[1] ?? null;
  }

  return null;
}

function isValidYoutubeVideoId(value: string | null): value is string {
  return Boolean(value && /^[A-Za-z0-9_-]{11}$/.test(value));
}

function buildThumbnailUrl(videoId: string, thumbnailKey: ThumbnailKey) {
  return `https://img.youtube.com/vi/${videoId}/${thumbnailKey}.jpg`;
}

export function YoutubeThumbnailExtractorTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [videoId, setVideoId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [availableKeys, setAvailableKeys] = useState<ThumbnailKey[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [copiedKey, setCopiedKey] = useState<ThumbnailKey | null>(null);

  useEffect(() => {
    if (!videoId) {
      setAvailableKeys([]);
      setIsChecking(false);
      return;
    }

    let cancelled = false;
    setIsChecking(true);

    Promise.all(
      thumbnailOrder.map(
        (key) =>
          new Promise<ThumbnailKey | null>((resolve) => {
            const image = new Image();

            image.onload = () => resolve(image.naturalWidth > 0 ? key : null);
            image.onerror = () => resolve(null);
            image.src = buildThumbnailUrl(videoId, key);
          })
      )
    ).then((results) => {
      if (cancelled) {
        return;
      }

      setAvailableKeys(results.filter((item): item is ThumbnailKey => item !== null));
      setIsChecking(false);
    });

    return () => {
      cancelled = true;
    };
  }, [videoId]);

  const thumbnails = useMemo<ThumbnailItem[]>(() => {
    if (!videoId) {
      return [];
    }

    return thumbnailOrder
      .filter((key) => availableKeys.includes(key))
      .map((key) => ({
        key,
        label: messages.thumbnailLabels[key],
        url: buildThumbnailUrl(videoId, key)
      }));
  }, [availableKeys, messages.thumbnailLabels, videoId]);

  const handleExtract = () => {
    const nextVideoId = extractYoutubeVideoId(inputValue);

    if (!isValidYoutubeVideoId(nextVideoId)) {
      setVideoId("");
      setAvailableKeys([]);
      setIsChecking(false);
      setCopiedKey(null);
      setErrorMessage(messages.invalidUrlMessage);
      return;
    }

    setVideoId(nextVideoId);
    setCopiedKey(null);
    setErrorMessage("");
  };

  const handleSample = () => {
    setInputValue(sampleUrl);
    setVideoId("");
    setAvailableKeys([]);
    setIsChecking(false);
    setCopiedKey(null);
    setErrorMessage("");
  };

  const handleClear = () => {
    setInputValue("");
    setVideoId("");
    setAvailableKeys([]);
    setIsChecking(false);
    setCopiedKey(null);
    setErrorMessage("");
  };

  const handleCopy = async (thumbnail: ThumbnailItem) => {
    try {
      await navigator.clipboard.writeText(thumbnail.url);
      setCopiedKey(thumbnail.key);
    } catch {
      setCopiedKey(null);
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{messages.title}</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{messages.description}</p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-slate-900">{messages.howToUseTitle}</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {messages.howToUseSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div>
          <label htmlFor="youtube-url-input" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <input
            id="youtube-url-input"
            type="url"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={messages.inputPlaceholder}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleExtract}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {messages.extractButton}
          </button>
          <button
            type="button"
            onClick={handleSample}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {messages.sampleButton}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {messages.clearButton}
          </button>
        </div>

        {errorMessage && <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{errorMessage}</p>}

        {videoId && (
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">{messages.videoIdLabel}:</span> {videoId}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-slate-900">{messages.thumbnailSectionTitle}</h2>
          <p className="mt-1 text-sm text-slate-600">{messages.thumbnailSectionDescription}</p>
        </div>

        {videoId && isChecking ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
            {messages.checkingThumbnailsMessage}
          </div>
        ) : videoId && thumbnails.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
            {messages.noThumbnailsMessage}
          </div>
        ) : thumbnails.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {thumbnails.map((thumbnail) => (
              <article key={thumbnail.key} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img src={thumbnail.url} alt={`${messages.thumbnailAlt} - ${thumbnail.label}`} className="aspect-video w-full bg-slate-200 object-cover" />
                <div className="space-y-3 p-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{thumbnail.label}</h3>
                    <p className="mt-1 break-all text-xs text-slate-500">{thumbnail.url}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(thumbnail)}
                      className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
                    >
                      {copiedKey === thumbnail.key ? messages.copiedLinkButton : messages.copyLinkButton}
                    </button>
                    <a
                      href={thumbnail.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                    >
                      {messages.openImageButton}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
            {messages.howToUseSteps[0]}
          </div>
        )}
      </section>
    </div>
  );
}
