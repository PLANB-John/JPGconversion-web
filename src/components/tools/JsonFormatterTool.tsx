"use client";

import { useState } from "react";
import type { JsonFormatterMessages } from "@/data/jsonFormatterMessages";

type Props = {
  messages: JsonFormatterMessages;
};

type ValidationStatus = "idle" | "valid" | "invalid";

const sampleJson = `{
  "project": "JPGconversion Web",
  "tool": "JSON Formatter",
  "features": ["Format", "Minify", "Validate", "Copy"],
  "active": true,
  "version": 1
}`;

export function JsonFormatterTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [validationStatus, setValidationStatus] = useState<ValidationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const runJsonAction = (action: "format" | "minify") => {
    const rawInput = inputValue.trim();

    if (!rawInput) {
      setValidationStatus("invalid");
      setErrorMessage(messages.emptyInputMessage);
      setOutputValue("");
      return;
    }

    try {
      const parsedJson = JSON.parse(rawInput);
      const nextOutput = action === "format" ? JSON.stringify(parsedJson, null, 2) : JSON.stringify(parsedJson);

      setOutputValue(nextOutput);
      setValidationStatus("valid");
      setErrorMessage("");
    } catch {
      setValidationStatus("invalid");
      setErrorMessage(messages.invalidJsonMessage);
      setOutputValue("");
    }
  };

  const handleCopy = async () => {
    if (!outputValue) {
      return;
    }

    try {
      await navigator.clipboard.writeText(outputValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const handleSample = () => {
    setInputValue(sampleJson);
    setOutputValue("");
    setValidationStatus("idle");
    setErrorMessage("");
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

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="json-input" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <textarea
            id="json-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder='{"name":"example"}'
            className="mt-2 h-72 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => runJsonAction("format")}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {messages.formatButton}
            </button>
            <button
              type="button"
              onClick={() => runJsonAction("minify")}
              className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-600"
            >
              {messages.minifyButton}
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
            <label htmlFor="json-output" className="text-sm font-semibold text-slate-900">
              {messages.outputLabel}
            </label>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!outputValue}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copied ? messages.copiedButton : messages.copyButton}
            </button>
          </div>

          <textarea
            id="json-output"
            value={outputValue}
            readOnly
            className="mt-2 h-72 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-800"
          />

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
            <p className="font-semibold text-slate-900">{messages.validateLabel}</p>
            <p className={`mt-1 ${validationStatus === "invalid" ? "text-rose-600" : "text-emerald-700"}`}>
              {validationStatus === "invalid"
                ? messages.invalidText
                : validationStatus === "valid"
                  ? messages.validText
                  : "-"}
            </p>
            {errorMessage && <p className="mt-2 text-rose-600">{errorMessage}</p>}
          </div>
        </article>
      </section>
    </div>
  );
}
