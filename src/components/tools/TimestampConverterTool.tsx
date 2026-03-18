"use client";

import { useMemo, useState } from "react";
import type { TimestampConverterMessages } from "@/data/timestampConverterMessages";

type Props = {
  messages: TimestampConverterMessages;
};

type ResultField = {
  key: string;
  label: string;
  value: string;
};

type ConversionResults = {
  seconds: string;
  milliseconds: string;
  localTime: string;
  utcTime: string;
  isoTime: string;
};

const sampleDate = new Date("2026-03-18T14:30:00Z");

const emptyResults: ConversionResults = {
  seconds: "",
  milliseconds: "",
  localTime: "",
  utcTime: "",
  isoTime: ""
};

function formatLocalDateTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short"
  }).format(date);
}

function formatInputDate(date: Date): string {
  const pad = (value: number) => value.toString().padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function buildResults(date: Date): ConversionResults {
  const milliseconds = date.getTime();

  return {
    seconds: Math.floor(milliseconds / 1000).toString(),
    milliseconds: milliseconds.toString(),
    localTime: formatLocalDateTime(date),
    utcTime: date.toUTCString(),
    isoTime: date.toISOString()
  };
}

function normalizeDateTimeInput(value: string): string {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return `${trimmed}T00:00:00`;
  }

  if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}$/.test(trimmed)) {
    return trimmed.replace(/\s+/, "T") + ":00";
  }

  if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/.test(trimmed)) {
    return trimmed.replace(/\s+/, "T");
  }

  return trimmed;
}

function parseTimestampInput(value: string): number | null {
  const trimmed = value.trim();

  if (!/^[-]?\d+$/.test(trimmed)) {
    return null;
  }

  const parsed = Number(trimmed);

  if (!Number.isSafeInteger(parsed)) {
    return null;
  }

  return trimmed.length <= 10 ? parsed * 1000 : parsed;
}

function isValidDate(date: Date): boolean {
  return Number.isFinite(date.getTime());
}

export function TimestampConverterTool({ messages }: Props) {
  const [timestampInput, setTimestampInput] = useState("");
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [results, setResults] = useState<ConversionResults>(emptyResults);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const resultFields = useMemo<ResultField[]>(
    () => [
      { key: "seconds", label: messages.secondsLabel, value: results.seconds },
      { key: "milliseconds", label: messages.millisecondsLabel, value: results.milliseconds },
      { key: "localTime", label: messages.localTimeLabel, value: results.localTime },
      { key: "utcTime", label: messages.utcTimeLabel, value: results.utcTime },
      { key: "isoTime", label: messages.isoTimeLabel, value: results.isoTime }
    ],
    [messages, results]
  );

  const applyDate = (date: Date, nextDateInput?: string, nextTimestampInput?: string) => {
    if (!isValidDate(date)) {
      setErrorMessage(messages.outOfRangeMessage);
      setStatusMessage("");
      setResults(emptyResults);
      return;
    }

    const nextResults = buildResults(date);

    setResults(nextResults);
    setErrorMessage("");
    setStatusMessage("");
    setCopiedKey(null);
    setTimestampInput(nextTimestampInput ?? nextResults.milliseconds);
    setDateTimeInput(nextDateInput ?? formatInputDate(date));
  };

  const handleTimestampConvert = () => {
    const milliseconds = parseTimestampInput(timestampInput);

    if (milliseconds === null) {
      setErrorMessage(messages.invalidTimestampMessage);
      setStatusMessage("");
      setResults(emptyResults);
      return;
    }

    applyDate(new Date(milliseconds));
  };

  const handleDateTimeConvert = () => {
    const normalized = normalizeDateTimeInput(dateTimeInput);

    if (!normalized) {
      setErrorMessage(messages.invalidDateTimeMessage);
      setStatusMessage("");
      setResults(emptyResults);
      return;
    }

    const date = new Date(normalized);

    if (!isValidDate(date)) {
      setErrorMessage(messages.invalidDateTimeMessage);
      setStatusMessage("");
      setResults(emptyResults);
      return;
    }

    applyDate(date, formatInputDate(date));
  };

  const handleUseCurrentTime = () => {
    const now = new Date();
    applyDate(now, formatInputDate(now), now.getTime().toString());
    setStatusMessage(messages.currentTimeReadyMessage);
  };

  const handleSample = () => {
    setTimestampInput(Math.floor(sampleDate.getTime() / 1000).toString());
    setDateTimeInput("2026-03-18 14:30:00");
    setResults(buildResults(sampleDate));
    setErrorMessage("");
    setStatusMessage("");
    setCopiedKey(null);
  };

  const handleClear = () => {
    setTimestampInput("");
    setDateTimeInput("");
    setResults(emptyResults);
    setErrorMessage("");
    setStatusMessage("");
    setCopiedKey(null);
  };

  const handleCopy = async (key: string, value: string) => {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 1500);
    } catch {
      setCopiedKey(null);
    }
  };

  const hasResults = resultFields.some((field) => field.value);

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

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{messages.timestampSectionTitle}</h2>
          <label htmlFor="timestamp-input" className="mt-4 block text-sm font-semibold text-slate-900">
            {messages.timestampLabel}
          </label>
          <input
            id="timestamp-input"
            type="text"
            inputMode="numeric"
            value={timestampInput}
            onChange={(event) => setTimestampInput(event.target.value)}
            placeholder={messages.timestampPlaceholder}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800"
          />
          <p className="mt-2 text-xs text-slate-500">{messages.timestampHint}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleTimestampConvert}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {messages.timestampToDateButton}
            </button>
            <button
              type="button"
              onClick={handleUseCurrentTime}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {messages.useCurrentTimeButton}
            </button>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{messages.dateTimeSectionTitle}</h2>
          <label htmlFor="datetime-input" className="mt-4 block text-sm font-semibold text-slate-900">
            {messages.dateTimeLabel}
          </label>
          <input
            id="datetime-input"
            type="text"
            value={dateTimeInput}
            onChange={(event) => setDateTimeInput(event.target.value)}
            placeholder={messages.dateTimePlaceholder}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-800"
          />
          <p className="mt-2 text-xs text-slate-500">{messages.dateTimeHint}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleDateTimeConvert}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {messages.dateToTimestampButton}
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
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-900">{messages.resultTitle}</h2>
          {statusMessage && <p className="text-sm text-emerald-700">{statusMessage}</p>}
        </div>

        {errorMessage && <p className="mt-4 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{errorMessage}</p>}

        {!errorMessage && !hasResults ? (
          <p className="mt-4 text-sm text-slate-500">{messages.emptyState}</p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {resultFields.map((field) => (
              <article key={field.key} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{field.label}</p>
                  <button
                    type="button"
                    onClick={() => handleCopy(field.key, field.value)}
                    disabled={!field.value}
                    className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copiedKey === field.key ? messages.copiedButton : messages.copyButton}
                  </button>
                </div>
                <p className="mt-3 break-all text-sm text-slate-800">{field.value || "-"}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
