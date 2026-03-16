"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { ImageCompressorMessages } from "@/data/imageCompressorMessages";

type Props = {
  messages: ImageCompressorMessages;
};

type OutputFormat = "image/jpeg" | "image/png" | "image/webp";

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kb = bytes / 1024;

  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`;
  }

  const mb = kb / 1024;
  return `${mb.toFixed(2)} MB`;
}

function getReductionPercent(originalSize: number, compressedSize: number) {
  if (originalSize <= 0 || compressedSize >= originalSize) {
    return 0;
  }

  return ((originalSize - compressedSize) / originalSize) * 100;
}

export function ImageCompressorTool({ messages }: Props) {
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [quality, setQuality] = useState<number>(80);
  const [format, setFormat] = useState<OutputFormat>("image/jpeg");
  const [error, setError] = useState<string | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const uploadInputId = useId();

  useEffect(() => {
    return () => {
      if (originalUrl) {
        URL.revokeObjectURL(originalUrl);
      }

      if (compressedUrl) {
        URL.revokeObjectURL(compressedUrl);
      }
    };
  }, [originalUrl, compressedUrl]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError(messages.errorInvalidFile);
      return;
    }

    if (originalUrl) {
      URL.revokeObjectURL(originalUrl);
    }

    if (compressedUrl) {
      URL.revokeObjectURL(compressedUrl);
    }

    const objectUrl = URL.createObjectURL(file);

    setSourceFile(file);
    setOriginalUrl(objectUrl);
    setCompressedUrl(null);
    setCompressedSize(null);
    setError(null);
  };

  const handleCompress = () => {
    if (!sourceFile || !originalUrl) {
      setError(messages.errorNoImage);
      return;
    }

    setIsCompressing(true);
    setError(null);

    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");

      if (!context) {
        setError(messages.errorProcessing);
        setIsCompressing(false);
        return;
      }

      context.drawImage(image, 0, 0);

      const outputQuality = format === "image/png" ? undefined : quality / 100;

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError(messages.errorProcessing);
            setIsCompressing(false);
            return;
          }

          if (compressedUrl) {
            URL.revokeObjectURL(compressedUrl);
          }

          const nextCompressedUrl = URL.createObjectURL(blob);
          setCompressedUrl(nextCompressedUrl);
          setCompressedSize(blob.size);
          setIsCompressing(false);
        },
        format,
        outputQuality
      );
    };

    image.onerror = () => {
      setError(messages.errorProcessing);
      setIsCompressing(false);
    };

    image.src = originalUrl;
  };

  const outputExtension = useMemo(() => {
    if (format === "image/png") {
      return "png";
    }

    if (format === "image/webp") {
      return "webp";
    }

    return "jpg";
  }, [format]);

  const downloadFileName = sourceFile
    ? `${sourceFile.name.replace(/\.[^.]+$/, "") || "compressed-image"}.${outputExtension}`
    : `compressed-image.${outputExtension}`;

  const reductionPercent = sourceFile && compressedSize ? getReductionPercent(sourceFile.size, compressedSize) : null;

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{messages.title}</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{messages.description}</p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-slate-900">{messages.instructionsTitle}</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {messages.instructions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label htmlFor={uploadInputId} className="block text-sm font-medium text-slate-700">
          {messages.uploadLabel}
        </label>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input id={uploadInputId} type="file" accept="image/*" onChange={handleUpload} className="sr-only" />
          <label
            htmlFor={uploadInputId}
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {messages.uploadButtonText}
          </label>
          <p className="text-sm text-slate-600" aria-live="polite">
            {sourceFile?.name || messages.noFileSelectedText}
          </p>
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-sm text-slate-700">
            <span className="font-medium">{messages.qualityLabel}</span>
            <span>{quality}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={100}
            step={1}
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
            className="w-full accent-slate-900"
          />
        </div>

        <div className="mt-5 space-y-2">
          <label htmlFor="output-format" className="block text-sm font-medium text-slate-700">
            {messages.outputFormatLabel}
          </label>
          <select
            id="output-format"
            value={format}
            onChange={(event) => setFormat(event.target.value as OutputFormat)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
          >
            <option value="image/jpeg">{messages.outputFormatJpeg}</option>
            <option value="image/png">{messages.outputFormatPng}</option>
            <option value="image/webp">{messages.outputFormatWebp}</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleCompress}
          disabled={isCompressing}
          className="mt-5 inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isCompressing ? `${messages.compressButton}...` : messages.compressButton}
        </button>

        {error && <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{messages.originalPreviewTitle}</h2>

          {originalUrl ? (
            <>
              <img src={originalUrl} alt={messages.originalPreviewTitle} className="mt-4 max-h-[24rem] w-full rounded-lg border border-slate-200 object-contain" />
              <p className="mt-3 text-sm text-slate-600">
                {messages.originalFileSizeLabel}: {sourceFile ? formatFileSize(sourceFile.size) : "-"}
              </p>
            </>
          ) : (
            <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-medium text-slate-700">{messages.emptyStateTitle}</p>
              <p className="mt-1 text-sm text-slate-500">{messages.emptyStateDescription}</p>
            </div>
          )}
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{messages.compressedPreviewTitle}</h2>

          {compressedUrl ? (
            <>
              <img src={compressedUrl} alt={messages.compressedPreviewTitle} className="mt-4 max-h-[24rem] w-full rounded-lg border border-slate-200 object-contain" />
              <div className="mt-3 space-y-1 text-sm text-slate-600">
                <p>
                  {messages.compressedFileSizeLabel}: {compressedSize ? formatFileSize(compressedSize) : "-"}
                </p>
                {reductionPercent !== null && (
                  <p>
                    {messages.reductionLabel}: {reductionPercent.toFixed(1)}%
                  </p>
                )}
              </div>
              <a
                href={compressedUrl}
                download={downloadFileName}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                {messages.downloadButton}
              </a>
            </>
          ) : (
            <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-medium text-slate-700">{messages.compressedEmptyTitle}</p>
              <p className="mt-1 text-sm text-slate-500">{messages.compressedEmptyDescription}</p>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
