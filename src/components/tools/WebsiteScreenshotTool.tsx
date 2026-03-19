"use client";

import { useState } from "react";
import type { WebsiteScreenshotMessages } from "@/data/websiteScreenshotMessages";

type Props = {
  messages: WebsiteScreenshotMessages;
};

type ScreenshotResponse = {
  imageUrl: string;
  pageUrl: string;
  mode: "preview-service";
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

export function WebsiteScreenshotTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCapture = async () => {
    const normalizedUrl = normalizeWebsiteUrl(inputValue);

    if (!normalizedUrl) {
      setErrorMessage(messages.invalidUrlMessage);
      setImageUrl("");
      setPageUrl("");
      setCopied(false);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setCopied(false);

    try {
      const response = await fetch(`/api/website-screenshot?url=${encodeURIComponent(normalizedUrl)}`);
      const data = (await response.json()) as Partial<ScreenshotResponse> & { error?: string; code?: string };

      if (!response.ok || typeof data.imageUrl !== "string" || typeof data.pageUrl !== "string") {
        if (data.code === "UNSUPPORTED_URL") {
          throw new Error(messages.unsupportedUrlMessage);
        }

        throw new Error(data.error || messages.captureFailedMessage);
      }

      setImageUrl(data.imageUrl);
      setPageUrl(data.pageUrl);
    } catch (error) {
      setImageUrl("");
      setPageUrl("");
      setErrorMessage(error instanceof Error ? error.message : messages.captureFailedMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSample = () => {
    setInputValue(sampleUrl);
    setImageUrl("");
    setPageUrl("");
    setErrorMessage("");
    setCopied(false);
  };

  const handleClear = () => {
    setInputValue("");
    setImageUrl("");
    setPageUrl("");
    setErrorMessage("");
    setCopied(false);
    setIsLoading(false);
  };

  const handleCopy = async () => {
    if (!imageUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(true);
    } catch {
      setCopied(false);
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
          <label htmlFor="website-screenshot-url" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <input
            id="website-screenshot-url"
            type="url"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={messages.inputPlaceholder}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
          />
          <p className="mt-2 text-xs text-slate-500">{messages.helperText}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleCapture}
            disabled={isLoading}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading ? messages.capturingButton : messages.captureButton}
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
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-slate-900">{messages.resultsTitle}</h2>
          <p className="mt-1 text-sm text-slate-600">{messages.resultsDescription}</p>
        </div>

        {isLoading ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
            {messages.capturingButton}
          </div>
        ) : imageUrl ? (
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <div className="border-b border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">{messages.sourcePageLabel}:</span>{" "}
                <span className="break-all">{pageUrl}</span>
              </p>
            </div>
            <div className="p-4">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <img src={imageUrl} alt={messages.previewAlt} className="w-full bg-slate-100 object-cover" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
                >
                  {copied ? messages.copiedLinkButton : messages.copyLinkButton}
                </button>
                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  {messages.openImageButton}
                </a>
              </div>
              <div className="mt-4 grid gap-2 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">{messages.resultLabel}:</span> <span className="break-all">{imageUrl}</span>
                </p>
                <p>{messages.fallbackNote}</p>
              </div>
            </div>
          </article>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
            {messages.readyStateMessage}
          </div>
        )}
      </section>
    </div>
  );
}
