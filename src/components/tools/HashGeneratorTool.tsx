"use client";

import { useEffect, useState } from "react";
import type { HashGeneratorMessages } from "@/data/hashGeneratorMessages";

type Props = {
  messages: HashGeneratorMessages;
};

type HashKey = "md5" | "sha1" | "sha256" | "sha512";

type HashResult = Record<HashKey, string>;

const sampleText = "Hello 안녕하세요 こんにちは ¡Hola! Bonjour Grüß Gott 👋";

const hashLabels: Record<HashKey, string> = {
  md5: "MD5",
  sha1: "SHA-1",
  sha256: "SHA-256",
  sha512: "SHA-512"
};

const emptyResults: HashResult = {
  md5: "",
  sha1: "",
  sha256: "",
  sha512: ""
};

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

async function createSubtleHash(algorithm: "SHA-1" | "SHA-256" | "SHA-512", text: string): Promise<string> {
  const encoded = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, encoded);

  return toHex(hashBuffer);
}

function md5Hash(text: string): string {
  function rotateLeft(value: number, bits: number): number {
    return (value << bits) | (value >>> (32 - bits));
  }

  function addUnsigned(first: number, second: number): number {
    return (first + second) >>> 0;
  }

  function cmn(q: number, a: number, b: number, x: number, s: number, t: number): number {
    return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, q), addUnsigned(x, t)), s), b);
  }

  function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
  }

  function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
  }

  function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function convertToWordArray(input: string): number[] {
    const messageLength = input.length;
    const numberOfWordsTempOne = messageLength + 8;
    const numberOfWordsTempTwo = (numberOfWordsTempOne - (numberOfWordsTempOne % 64)) / 64;
    const numberOfWords = (numberOfWordsTempTwo + 1) * 16;
    const wordArray = new Array<number>(numberOfWords).fill(0);

    let byteCount = 0;

    while (byteCount < messageLength) {
      const wordCount = (byteCount - (byteCount % 4)) / 4;
      const bytePosition = (byteCount % 4) * 8;
      wordArray[wordCount] |= input.charCodeAt(byteCount) << bytePosition;
      byteCount += 1;
    }

    const wordCount = (byteCount - (byteCount % 4)) / 4;
    const bytePosition = (byteCount % 4) * 8;
    wordArray[wordCount] |= 0x80 << bytePosition;
    wordArray[numberOfWords - 2] = messageLength << 3;
    wordArray[numberOfWords - 1] = messageLength >>> 29;

    return wordArray;
  }

  function wordToHex(value: number): string {
    let output = "";

    for (let i = 0; i <= 3; i += 1) {
      const byte = (value >>> (i * 8)) & 255;
      output += byte.toString(16).padStart(2, "0");
    }

    return output;
  }

  const utf8Text = unescape(encodeURIComponent(text));
  const x = convertToWordArray(utf8Text);

  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  for (let k = 0; k < x.length; k += 16) {
    const aa = a;
    const bb = b;
    const cc = c;
    const dd = d;

    a = ff(a, b, c, d, x[k], 7, 0xd76aa478);
    d = ff(d, a, b, c, x[k + 1], 12, 0xe8c7b756);
    c = ff(c, d, a, b, x[k + 2], 17, 0x242070db);
    b = ff(b, c, d, a, x[k + 3], 22, 0xc1bdceee);
    a = ff(a, b, c, d, x[k + 4], 7, 0xf57c0faf);
    d = ff(d, a, b, c, x[k + 5], 12, 0x4787c62a);
    c = ff(c, d, a, b, x[k + 6], 17, 0xa8304613);
    b = ff(b, c, d, a, x[k + 7], 22, 0xfd469501);
    a = ff(a, b, c, d, x[k + 8], 7, 0x698098d8);
    d = ff(d, a, b, c, x[k + 9], 12, 0x8b44f7af);
    c = ff(c, d, a, b, x[k + 10], 17, 0xffff5bb1);
    b = ff(b, c, d, a, x[k + 11], 22, 0x895cd7be);
    a = ff(a, b, c, d, x[k + 12], 7, 0x6b901122);
    d = ff(d, a, b, c, x[k + 13], 12, 0xfd987193);
    c = ff(c, d, a, b, x[k + 14], 17, 0xa679438e);
    b = ff(b, c, d, a, x[k + 15], 22, 0x49b40821);

    a = gg(a, b, c, d, x[k + 1], 5, 0xf61e2562);
    d = gg(d, a, b, c, x[k + 6], 9, 0xc040b340);
    c = gg(c, d, a, b, x[k + 11], 14, 0x265e5a51);
    b = gg(b, c, d, a, x[k], 20, 0xe9b6c7aa);
    a = gg(a, b, c, d, x[k + 5], 5, 0xd62f105d);
    d = gg(d, a, b, c, x[k + 10], 9, 0x02441453);
    c = gg(c, d, a, b, x[k + 15], 14, 0xd8a1e681);
    b = gg(b, c, d, a, x[k + 4], 20, 0xe7d3fbc8);
    a = gg(a, b, c, d, x[k + 9], 5, 0x21e1cde6);
    d = gg(d, a, b, c, x[k + 14], 9, 0xc33707d6);
    c = gg(c, d, a, b, x[k + 3], 14, 0xf4d50d87);
    b = gg(b, c, d, a, x[k + 8], 20, 0x455a14ed);
    a = gg(a, b, c, d, x[k + 13], 5, 0xa9e3e905);
    d = gg(d, a, b, c, x[k + 2], 9, 0xfcefa3f8);
    c = gg(c, d, a, b, x[k + 7], 14, 0x676f02d9);
    b = gg(b, c, d, a, x[k + 12], 20, 0x8d2a4c8a);

    a = hh(a, b, c, d, x[k + 5], 4, 0xfffa3942);
    d = hh(d, a, b, c, x[k + 8], 11, 0x8771f681);
    c = hh(c, d, a, b, x[k + 11], 16, 0x6d9d6122);
    b = hh(b, c, d, a, x[k + 14], 23, 0xfde5380c);
    a = hh(a, b, c, d, x[k + 1], 4, 0xa4beea44);
    d = hh(d, a, b, c, x[k + 4], 11, 0x4bdecfa9);
    c = hh(c, d, a, b, x[k + 7], 16, 0xf6bb4b60);
    b = hh(b, c, d, a, x[k + 10], 23, 0xbebfbc70);
    a = hh(a, b, c, d, x[k + 13], 4, 0x289b7ec6);
    d = hh(d, a, b, c, x[k], 11, 0xeaa127fa);
    c = hh(c, d, a, b, x[k + 3], 16, 0xd4ef3085);
    b = hh(b, c, d, a, x[k + 6], 23, 0x04881d05);
    a = hh(a, b, c, d, x[k + 9], 4, 0xd9d4d039);
    d = hh(d, a, b, c, x[k + 12], 11, 0xe6db99e5);
    c = hh(c, d, a, b, x[k + 15], 16, 0x1fa27cf8);
    b = hh(b, c, d, a, x[k + 2], 23, 0xc4ac5665);

    a = ii(a, b, c, d, x[k], 6, 0xf4292244);
    d = ii(d, a, b, c, x[k + 7], 10, 0x432aff97);
    c = ii(c, d, a, b, x[k + 14], 15, 0xab9423a7);
    b = ii(b, c, d, a, x[k + 5], 21, 0xfc93a039);
    a = ii(a, b, c, d, x[k + 12], 6, 0x655b59c3);
    d = ii(d, a, b, c, x[k + 3], 10, 0x8f0ccc92);
    c = ii(c, d, a, b, x[k + 10], 15, 0xffeff47d);
    b = ii(b, c, d, a, x[k + 1], 21, 0x85845dd1);
    a = ii(a, b, c, d, x[k + 8], 6, 0x6fa87e4f);
    d = ii(d, a, b, c, x[k + 15], 10, 0xfe2ce6e0);
    c = ii(c, d, a, b, x[k + 6], 15, 0xa3014314);
    b = ii(b, c, d, a, x[k + 13], 21, 0x4e0811a1);
    a = ii(a, b, c, d, x[k + 4], 6, 0xf7537e82);
    d = ii(d, a, b, c, x[k + 11], 10, 0xbd3af235);
    c = ii(c, d, a, b, x[k + 2], 15, 0x2ad7d2bb);
    b = ii(b, c, d, a, x[k + 9], 21, 0xeb86d391);

    a = addUnsigned(a, aa);
    b = addUnsigned(b, bb);
    c = addUnsigned(c, cc);
    d = addUnsigned(d, dd);
  }

  return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

export function HashGeneratorTool({ messages }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<HashResult>(emptyResults);
  const [copiedKey, setCopiedKey] = useState<HashKey | null>(null);

  useEffect(() => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setResults(emptyResults);
      setCopiedKey(null);
      return;
    }

    let active = true;

    async function generateHashes() {
      const nextResults: HashResult = {
        md5: md5Hash(inputValue),
        sha1: await createSubtleHash("SHA-1", inputValue),
        sha256: await createSubtleHash("SHA-256", inputValue),
        sha512: await createSubtleHash("SHA-512", inputValue)
      };

      if (active) {
        setResults(nextResults);
      }
    }

    void generateHashes();

    return () => {
      active = false;
    };
  }, [inputValue]);

  const handleCopy = async (key: HashKey) => {
    const value = results[key];

    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
    } catch {
      setCopiedKey(null);
    }
  };

  const handleSample = () => {
    setInputValue(sampleText);
    setCopiedKey(null);
  };

  const handleClear = () => {
    setInputValue("");
    setResults(emptyResults);
    setCopiedKey(null);
  };

  const hasInput = Boolean(inputValue.trim());

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
          <label htmlFor="hash-input" className="text-sm font-semibold text-slate-900">
            {messages.inputLabel}
          </label>
          <textarea
            id="hash-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={messages.inputPlaceholder}
            className="mt-2 h-56 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800"
          />
        </div>

        <div className="flex flex-wrap gap-2">
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

        <div className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">{messages.resultSectionTitle}</h2>

          {!hasInput && <p className="text-sm text-slate-600">{messages.emptyMessage}</p>}

          <div className="grid gap-3">
            {(Object.keys(hashLabels) as HashKey[]).map((key) => (
              <article key={key} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900">{hashLabels[key]}</h3>
                  <button
                    type="button"
                    onClick={() => handleCopy(key)}
                    disabled={!results[key]}
                    className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copiedKey === key ? messages.copiedButton : messages.copyButton}
                  </button>
                </div>
                <p className="mt-2 break-all font-mono text-xs text-slate-700 sm:text-sm">{results[key] || "-"}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
