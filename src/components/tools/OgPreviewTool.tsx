"use client";

import { useMemo, useState } from "react";
import type { OgPreviewFieldKey, OgPreviewMessages } from "@/data/ogPreviewMessages";

type Props = {
  messages: OgPreviewMessages;
};

type OgPreviewMetadata = Record<OgPreviewFieldKey, string | null>;

type OgPreviewResponse = {
  metadata: OgPreviewMetadata;
  requestedUrl: string;
  pageUrl: string;
};

const sampleUrl = "https://ogp.me/";

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

function buildPreviewContent(metadata: OgPreviewMetadata, fallbackUrl: string) {
  return {
    title: metadata.ogTitle || metadata.twitterTitle || metadata.title || fallbackUrl,
    description: metadata.ogDescription || metadata.twitterDescription || metadata.metaDescription || "",
    image: metadata.ogImage || metadata.twitterImage || "",
    url: metadata.ogUrl || fallbackUrl,
    type: metadata.ogType || metadata.twitterCard || "website"
  };
}

const metadataFieldOrder: OgPreviewFieldKey[] = [
  "ogTitle",
  "ogDescription",
  "ogImage",
  "ogUrl",
  "ogType",
  "twitterTitle",
  "twitterDescription",
  "twitterImage",
  "twitterCard",
  "title",
  "metaDescription"
];

export function OgPreviewTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<OgPreviewResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const preview = useMemo(() => {
    if (!result) {
      return null;
    }

    return buildPreviewContent(result.metadata, result.pageUrl || result.requestedUrl);
  }, [result]);

  const handlePreview = async () => {
    const normalizedUrl = normalizeWebsiteUrl(inputValue);

    if (!normalizedUrl) {
      setErrorMessage(messages.invalidUrlMessage);
      setResult(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(`/api/og-preview?url=${encodeURIComponent(normalizedUrl)}`);
      const data = (await response.json()) as Partial<OgPreviewResponse> & { error?: string };

      if (!response.ok || !data.metadata || typeof data.pageUrl !== "string" || typeof data.requestedUrl !== "string") {
        throw new Error(data.error || "Fetch failed");
      }

      setResult({
        metadata: data.metadata as OgPreviewMetadata,
        pageUrl: data.pageUrl,
        requestedUrl: data.requestedUrl
      });
    } catch {
      setResult(null);
      setErrorMessage(messages.fetchFailedMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSample = () => {
    setInputValue(sampleUrl);
    setResult(null);
    setErrorMessage("");
  };

  const handleClear = () => {
    setInputValue("");
    setResult(null);
    setErrorMessage("");
    setIsLoading(false);
  };

  const hasAnyMetadata = result ? metadataFieldOrder.some((fieldKey) => Boolean(result.metadata[fieldKey])) : false;

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
          <label htmlFor="og-preview-url-input" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <input
            id="og-preview-url-input"
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
            onClick={handlePreview}
            disabled={isLoading}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading ? messages.previewingButton : messages.previewButton}
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

        {result && (
          <div className="grid gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
            <p>
              <span className="font-semibold text-slate-900">{messages.sourceUrlLabel}:</span> <span className="break-all">{result.requestedUrl}</span>
            </p>
            <p>
              <span className="font-semibold text-slate-900">{messages.resolvedUrlLabel}:</span> <span className="break-all">{result.pageUrl}</span>
            </p>
          </div>
        )}
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900">{messages.previewSectionTitle}</h2>
            <p className="mt-1 text-sm text-slate-600">{messages.previewSectionDescription}</p>
          </div>

          {isLoading ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">{messages.previewingButton}</div>
          ) : preview && hasAnyMetadata ? (
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="aspect-[1.91/1] w-full bg-slate-200">
                {preview.image ? (
                  <img src={preview.image} alt={messages.previewImageAlt} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-500">{messages.noMetadataFoundMessage}</div>
                )}
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
                  <span className="rounded-full bg-slate-200 px-2.5 py-1 font-medium text-slate-700">{preview.type}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{preview.title}</h3>
                  {preview.description && <p className="mt-2 text-sm leading-6 text-slate-600">{preview.description}</p>}
                </div>
                <p className="break-all text-xs text-slate-500">{preview.url}</p>
              </div>
            </article>
          ) : result ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">{messages.noMetadataFoundMessage}</div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">{messages.readyStateMessage}</div>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900">{messages.metadataSectionTitle}</h2>
            <p className="mt-1 text-sm text-slate-600">{messages.metadataSectionDescription}</p>
          </div>

          {result ? (
            <dl className="space-y-3">
              {metadataFieldOrder.map((fieldKey) => {
                const value = result.metadata[fieldKey];

                return (
                  <div key={fieldKey} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{messages.fields[fieldKey]}</dt>
                    <dd className="mt-2 break-all text-sm text-slate-700">{value || messages.emptyValue}</dd>
                  </div>
                );
              })}
            </dl>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">{messages.readyStateMessage}</div>
          )}
        </section>
      </div>
    </div>
  );
}
