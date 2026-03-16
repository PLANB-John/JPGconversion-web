"use client";

import { useMemo, useState } from "react";
import type { CharacterCounterMessages } from "@/data/characterCounterMessages";

type Props = {
  messages: CharacterCounterMessages;
};

const sampleText = `The quick brown fox jumps over the lazy dog.
안녕하세요! This line mixes English and Korean.
12345 😀`;

function getByteCount(text: string): number {
  return new TextEncoder().encode(text).length;
}

export function CharacterCounterTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");

  const stats = useMemo(() => {
    const totalCharacters = inputValue.length;
    const charactersWithoutSpaces = inputValue.replace(/\s/g, "").length;
    const words = inputValue.trim() ? inputValue.trim().split(/\s+/).length : 0;
    const lines = inputValue.length === 0 ? 0 : inputValue.split(/\r\n|\r|\n/).length;
    const bytes = getByteCount(inputValue);

    return {
      totalCharacters,
      charactersWithoutSpaces,
      words,
      lines,
      bytes
    };
  }, [inputValue]);

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

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label htmlFor="character-counter-input" className="text-sm font-semibold text-slate-900">
          {messages.inputLabel}
        </label>
        <textarea
          id="character-counter-input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder={messages.placeholder}
          className="mt-2 h-72 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setInputValue("")}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {messages.clearButton}
          </button>
          <button
            type="button"
            onClick={() => setInputValue(sampleText)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {messages.sampleTextButton}
          </button>
        </div>

        {inputValue.length === 0 && <p className="mt-3 text-xs text-slate-500">{messages.emptyState}</p>}
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">{messages.totalCharactersLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.totalCharacters}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">{messages.charactersWithoutSpacesLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.charactersWithoutSpaces}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">{messages.wordCountLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.words}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium text-slate-500">{messages.lineCountLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.lines}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2 lg:col-span-1">
          <p className="text-xs font-medium text-slate-500">{messages.byteCountLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{stats.bytes}</p>
        </article>
      </section>
    </div>
  );
}
