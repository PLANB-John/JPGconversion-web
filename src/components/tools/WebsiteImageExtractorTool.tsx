"use client";

import { useState } from "react";
import type { WebsiteImageExtractorMessages } from "@/data/websiteImageExtractorMessages";

type Props = {
  messages: WebsiteImageExtractorMessages;
};

type ExtractedImage = {
  url: string;
  source: string;
};

type ExtractResponse = {
  images: ExtractedImage[];
  pageUrl: string;
};

const sampleUrl = "https://www.wikipedia.org/";

function normalizeWebsiteUrl(value: string) {
  const input = value.trim();

  if (!input) {
    return null;
  }

  try {
    const url = new URL(input);
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export function WebsiteImageExtractorTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState<ExtractedImage[]>([]);
  const [pageUrl, setPageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState("");

  const handleExtract = async () => {
    const normalizedUrl = normalizeWebsiteUrl(inputValue);

    if (!normalizedUrl) {
      setErrorMessage(messages.invalidUrlMessage);
      setImages([]);
      setPageUrl("");
      setCopiedUrl("");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setCopiedUrl("");

    try {
      const response = await fetch(`/api/website-image-extractor?url=${encodeURIComponent(normalizedUrl)}`);
      const data = (await response.json()) as Partial<ExtractResponse> & { error?: string };

      if (!response.ok || !Array.isArray(data.images) || typeof data.pageUrl !== "string") {
        throw new Error(data.error || "Fetch failed");
      }

      setImages(data.images);
      setPageUrl(data.pageUrl);
    } catch {
      setImages([]);
      setPageUrl("");
      setErrorMessage(messages.fetchFailedMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSample = () => {
    setInputValue(sampleUrl);
    setImages([]);
    setPageUrl("");
    setErrorMessage("");
    setCopiedUrl("");
  };

  const handleClear = () => {
    setInputValue("");
    setImages([]);
    setPageUrl("");
    setErrorMessage("");
    setCopiedUrl("");
    setIsLoading(false);
  };

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
    } catch {
      setCopiedUrl("");
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
          <label htmlFor="website-url-input" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <input
            id="website-url-input"
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
            disabled={isLoading}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading ? messages.extractingButton : messages.extractButton}
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

        {pageUrl && (
          <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
            <p>
              <span className="font-semibold text-slate-900">{messages.sourcePageLabel}:</span> <span className="break-all">{pageUrl}</span>
            </p>
            <p>
              <span className="font-semibold text-slate-900">{messages.imageCountLabel}:</span> {images.length}
            </p>
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-slate-900">{messages.resultsTitle}</h2>
          <p className="mt-1 text-sm text-slate-600">{messages.resultsDescription}</p>
        </div>

        {isLoading ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
            {messages.extractingButton}
          </div>
        ) : images.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {images.map((image) => (
              <article key={`${image.source}-${image.url}`} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img src={image.url} alt={`${messages.imageAlt} - ${image.source}`} className="aspect-video w-full bg-slate-200 object-cover" loading="lazy" />
                <div className="space-y-3 p-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{image.source}</p>
                    <p className="mt-2 text-xs font-medium text-slate-700">{messages.imageUrlLabel}</p>
                    <p className="mt-1 break-all text-xs text-slate-500">{image.url}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(image.url)}
                      className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
                    >
                      {copiedUrl === image.url ? messages.copiedLinkButton : messages.copyLinkButton}
                    </button>
                    <a
                      href={image.url}
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
        ) : pageUrl ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
            {messages.noImagesFoundMessage}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
            {messages.readyStateMessage}
          </div>
        )}
      </section>
    </div>
  );
}
