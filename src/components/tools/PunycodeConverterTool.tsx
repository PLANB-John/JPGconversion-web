"use client";

import { useState } from "react";
import type { PunycodeConverterMessages } from "@/data/punycodeConverterMessages";
import { toASCII, toUnicode } from "@/lib/punycode";

type Props = {
  messages: PunycodeConverterMessages;
};

const sampleUnicodeDomain = "bücher.example";
const samplePunycodeDomain = "xn--bcher-kva.example";
const asciiLabelPattern = /^[a-z0-9-]+$/i;

function normalizeDomainInput(value: string) {
  return value
    .trim()
    .replace(/[\u3002\uFF0E\uFF61]/g, ".")
    .replace(/^https?:\/\//i, "")
    .split(/[/?#]/, 1)[0]
    .replace(/\.$/, "");
}

function isStructurallyValidDomain(domain: string) {
  if (!domain || /\s/.test(domain)) {
    return false;
  }

  return domain.split(".").every((label) => {
    if (!label || label.length > 63) {
      return false;
    }

    return !label.startsWith("-") && !label.endsWith("-");
  });
}

function isAsciiDomain(domain: string) {
  return isStructurallyValidDomain(domain) && domain.split(".").every((label) => asciiLabelPattern.test(label));
}

export function PunycodeConverterTool({ messages }: Props) {
  const [unicodeValue, setUnicodeValue] = useState("");
  const [punycodeValue, setPunycodeValue] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedField, setCopiedField] = useState<"unicode" | "punycode" | null>(null);

  const resetFeedback = () => {
    setStatusMessage("");
    setErrorMessage("");
    setCopiedField(null);
  };

  const handleConvertToPunycode = () => {
    const normalizedUnicode = normalizeDomainInput(unicodeValue);

    if (!normalizedUnicode) {
      setErrorMessage(messages.emptyUnicodeMessage);
      setStatusMessage("");
      setPunycodeValue("");
      return;
    }

    if (!isStructurallyValidDomain(normalizedUnicode)) {
      setErrorMessage(messages.invalidUnicodeMessage);
      setStatusMessage("");
      setPunycodeValue("");
      return;
    }

    try {
      const converted = toASCII(normalizedUnicode);

      if (!converted || !isAsciiDomain(converted)) {
        throw new Error("Invalid Unicode domain");
      }

      setUnicodeValue(normalizedUnicode);
      setPunycodeValue(converted);
      setStatusMessage(messages.successToPunycodeMessage);
      setErrorMessage("");
      setCopiedField(null);
    } catch {
      setErrorMessage(messages.invalidUnicodeMessage);
      setStatusMessage("");
      setPunycodeValue("");
    }
  };

  const handleConvertToUnicode = () => {
    const normalizedPunycode = normalizeDomainInput(punycodeValue).toLowerCase();

    if (!normalizedPunycode) {
      setErrorMessage(messages.emptyPunycodeMessage);
      setStatusMessage("");
      setUnicodeValue("");
      return;
    }

    if (!isAsciiDomain(normalizedPunycode)) {
      setErrorMessage(messages.invalidPunycodeMessage);
      setStatusMessage("");
      setUnicodeValue("");
      return;
    }

    try {
      const converted = toUnicode(normalizedPunycode);

      if (!converted || !isStructurallyValidDomain(converted)) {
        throw new Error("Invalid punycode domain");
      }

      setPunycodeValue(normalizedPunycode);
      setUnicodeValue(converted);
      setStatusMessage(messages.successToUnicodeMessage);
      setErrorMessage("");
      setCopiedField(null);
    } catch {
      setErrorMessage(messages.invalidPunycodeMessage);
      setStatusMessage("");
      setUnicodeValue("");
    }
  };

  const handleSample = () => {
    setUnicodeValue(sampleUnicodeDomain);
    setPunycodeValue(samplePunycodeDomain);
    resetFeedback();
  };

  const handleClear = () => {
    setUnicodeValue("");
    setPunycodeValue("");
    resetFeedback();
  };

  const handleCopy = async (field: "unicode" | "punycode", value: string) => {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((current) => (current === field ? null : current));
      }, 1500);
    } catch {
      setCopiedField(null);
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
          <p className="mt-3 text-xs text-slate-500">{messages.helperText}</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="unicode-domain" className="text-sm font-semibold text-slate-900">
              {messages.unicodeLabel}
            </label>
            <button
              type="button"
              onClick={() => handleCopy("unicode", unicodeValue)}
              disabled={!unicodeValue}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copiedField === "unicode" ? messages.copiedButton : messages.copyButton}
            </button>
          </div>
          <textarea
            id="unicode-domain"
            value={unicodeValue}
            onChange={(event) => {
              setUnicodeValue(event.target.value);
              resetFeedback();
            }}
            placeholder={messages.unicodePlaceholder}
            className="mt-2 h-48 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleConvertToPunycode}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {messages.toPunycodeButton}
            </button>
            <button
              type="button"
              onClick={handleSample}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {messages.sampleButton}
            </button>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="punycode-domain" className="text-sm font-semibold text-slate-900">
              {messages.punycodeLabel}
            </label>
            <button
              type="button"
              onClick={() => handleCopy("punycode", punycodeValue)}
              disabled={!punycodeValue}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copiedField === "punycode" ? messages.copiedButton : messages.copyButton}
            </button>
          </div>
          <textarea
            id="punycode-domain"
            value={punycodeValue}
            onChange={(event) => {
              setPunycodeValue(event.target.value);
              resetFeedback();
            }}
            placeholder={messages.punycodePlaceholder}
            className="mt-2 h-48 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleConvertToUnicode}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {messages.toUnicodeButton}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {messages.clearButton}
            </button>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-semibold text-slate-900">{messages.title}</h2>
        <div className="mt-4 space-y-3 text-sm">
          {statusMessage && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-700">{statusMessage}</p>}
          {errorMessage && (
            <p className="rounded-lg bg-rose-50 px-3 py-2 text-rose-700">
              <span className="font-semibold">{messages.errorPrefix}</span> {errorMessage}
            </p>
          )}
          {!statusMessage && !errorMessage && <p className="text-slate-500">{messages.helperText}</p>}
        </div>
      </section>
    </div>
  );
}
