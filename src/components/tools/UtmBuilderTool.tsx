"use client";

import { useMemo, useState } from "react";
import type { UtmBuilderMessages, UtmFieldKey } from "@/data/utmBuilderMessages";

type Props = {
  messages: UtmBuilderMessages;
};

type UtmValues = Record<UtmFieldKey, string>;

type BuildResult = {
  finalUrl: string;
  isValid: boolean;
};

const utmFieldOrder: UtmFieldKey[] = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

const sampleValues: { baseUrl: string; fields: UtmValues } = {
  baseUrl: "https://example.com/pricing?ref=homepage",
  fields: {
    utm_source: "newsletter",
    utm_medium: "email",
    utm_campaign: "spring_launch",
    utm_term: "productivity tools",
    utm_content: "hero-button"
  }
};

function createEmptyFields(): UtmValues {
  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  };
}

function buildUtmUrl(baseUrl: string, fields: UtmValues): BuildResult {
  const trimmedBaseUrl = baseUrl.trim();

  if (!trimmedBaseUrl) {
    return { finalUrl: "", isValid: false };
  }

  try {
    const url = new URL(trimmedBaseUrl);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return { finalUrl: "", isValid: false };
    }

    utmFieldOrder.forEach((fieldKey) => {
      const trimmedValue = fields[fieldKey].trim();

      if (trimmedValue) {
        url.searchParams.set(fieldKey, trimmedValue);
      } else {
        url.searchParams.delete(fieldKey);
      }
    });

    return { finalUrl: url.toString(), isValid: true };
  } catch {
    return { finalUrl: "", isValid: false };
  }
}

export function UtmBuilderTool({ messages }: Props) {
  const [baseUrl, setBaseUrl] = useState("");
  const [fields, setFields] = useState<UtmValues>(createEmptyFields);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => buildUtmUrl(baseUrl, fields), [baseUrl, fields]);

  const activeSummaryItems = utmFieldOrder.filter((fieldKey) => fields[fieldKey].trim());
  const showInvalidMessage = baseUrl.trim().length > 0 && !result.isValid;

  const handleFieldChange = (fieldKey: UtmFieldKey, value: string) => {
    setFields((currentFields) => ({
      ...currentFields,
      [fieldKey]: value
    }));
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!result.finalUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(result.finalUrl);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleSample = () => {
    setBaseUrl(sampleValues.baseUrl);
    setFields(sampleValues.fields);
    setCopied(false);
  };

  const handleClear = () => {
    setBaseUrl("");
    setFields(createEmptyFields());
    setCopied(false);
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

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <label htmlFor="utm-builder-base-url" className="text-sm font-semibold text-slate-900">
              {messages.baseUrlLabel}
            </label>
            <input
              id="utm-builder-base-url"
              type="url"
              value={baseUrl}
              onChange={(event) => {
                setBaseUrl(event.target.value);
                setCopied(false);
              }}
              placeholder={messages.baseUrlPlaceholder}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {utmFieldOrder.map((fieldKey) => (
              <div key={fieldKey} className={fieldKey === "utm_content" ? "sm:col-span-2" : ""}>
                <label htmlFor={fieldKey} className="text-sm font-semibold text-slate-900">
                  {fieldKey}
                </label>
                <input
                  id={fieldKey}
                  type="text"
                  value={fields[fieldKey]}
                  onChange={(event) => handleFieldChange(fieldKey, event.target.value)}
                  placeholder={messages.fieldPlaceholders[fieldKey]}
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!result.finalUrl}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {copied ? messages.copiedButton : messages.copyButton}
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

          {showInvalidMessage && (
            <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{messages.invalidUrlMessage}</p>
          )}
        </section>

        <div className="space-y-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-900">{messages.generatedUrlTitle}</h2>
              <p className="mt-1 text-sm text-slate-600">{messages.generatedUrlDescription}</p>
            </div>
            <textarea
              value={result.finalUrl}
              readOnly
              placeholder={messages.generatedUrlPlaceholder}
              className="h-44 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-800"
            />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-900">{messages.parameterSummaryTitle}</h2>
              <p className="mt-1 text-sm text-slate-600">{messages.parameterSummaryDescription}</p>
            </div>

            {activeSummaryItems.length > 0 ? (
              <dl className="space-y-3">
                {utmFieldOrder.map((fieldKey) => (
                  <div key={fieldKey} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{fieldKey}</dt>
                    <dd className="mt-1 break-all text-sm text-slate-700">{fields[fieldKey].trim() || messages.summaryValueFallback}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">
                {messages.emptySummaryMessage}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
