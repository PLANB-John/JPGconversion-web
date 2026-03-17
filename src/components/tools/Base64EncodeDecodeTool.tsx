"use client";

import { useState } from "react";
import type { Base64EncodeDecodeMessages } from "@/data/base64EncodeDecodeMessages";

type Props = {
  messages: Base64EncodeDecodeMessages;
};

const sampleText = "Hello 안녕하세요 こんにちは ¡Hola! Bonjour Grüß Gott 👋";

function encodeBase64Utf8(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
}

function decodeBase64Utf8(base64Text: string): string {
  const normalizedInput = base64Text.replace(/\s+/g, "");
  const binary = atob(normalizedInput);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

export function Base64EncodeDecodeTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const resetFeedback = () => {
    setErrorMessage("");
    setCopied(false);
  };

  const handleEncode = () => {
    resetFeedback();

    if (!inputValue.trim()) {
      setErrorMessage(messages.emptyInputMessage);
      setOutputValue("");
      return;
    }

    setOutputValue(encodeBase64Utf8(inputValue));
  };

  const handleDecode = () => {
    resetFeedback();

    if (!inputValue.trim()) {
      setErrorMessage(messages.emptyInputMessage);
      setOutputValue("");
      return;
    }

    try {
      setOutputValue(decodeBase64Utf8(inputValue));
    } catch {
      setErrorMessage(messages.decodeErrorMessage);
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
    } catch {
      setCopied(false);
    }
  };

  const handleSample = () => {
    setInputValue(sampleText);
    setOutputValue("");
    resetFeedback();
  };

  const handleClear = () => {
    setInputValue("");
    setOutputValue("");
    resetFeedback();
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
          <label htmlFor="base64-input" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <textarea
            id="base64-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={messages.inputPlaceholder}
            className="mt-2 h-56 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleEncode}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {messages.encodeButton}
          </button>
          <button
            type="button"
            onClick={handleDecode}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {messages.decodeButton}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!outputValue}
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

        {errorMessage && <p className="text-sm text-rose-600">{errorMessage}</p>}

        <div>
          <label htmlFor="base64-output" className="text-sm font-semibold text-slate-900">
            {messages.outputLabel}
          </label>
          <textarea
            id="base64-output"
            value={outputValue}
            readOnly
            placeholder={messages.outputPlaceholder}
            className="mt-2 h-56 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-800"
          />
        </div>
      </section>
    </div>
  );
}
