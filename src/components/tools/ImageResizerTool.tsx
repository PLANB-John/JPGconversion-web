"use client";

import { useEffect, useState } from "react";
import type { ImageResizerMessages } from "@/data/imageResizerMessages";

type Props = {
  messages: ImageResizerMessages;
};

type OutputFormat = "image/png" | "image/jpeg";

export function ImageResizerTool({ messages }: Props) {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [originalWidth, setOriginalWidth] = useState<number | null>(null);
  const [originalHeight, setOriginalHeight] = useState<number | null>(null);
  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("image/png");
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (originalUrl) {
        URL.revokeObjectURL(originalUrl);
      }
    };
  }, [originalUrl]);

  const loadImageDimensions = (objectUrl: string) => {
    const image = new Image();

    image.onload = () => {
      setOriginalWidth(image.naturalWidth);
      setOriginalHeight(image.naturalHeight);
      setTargetWidth(image.naturalWidth);
      setTargetHeight(image.naturalHeight);
      setResizedUrl(null);
      setError(null);
    };

    image.onerror = () => {
      setError(messages.errorProcessing);
    };

    image.src = objectUrl;
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (originalUrl) {
      URL.revokeObjectURL(originalUrl);
    }

    const nextObjectUrl = URL.createObjectURL(file);
    setOriginalUrl(nextObjectUrl);
    loadImageDimensions(nextObjectUrl);
  };

  const handleWidthChange = (value: number) => {
    setTargetWidth(value);

    if (lockAspectRatio && originalWidth && originalHeight && value > 0) {
      const calculatedHeight = Math.max(1, Math.round((value * originalHeight) / originalWidth));
      setTargetHeight(calculatedHeight);
    }
  };

  const handleHeightChange = (value: number) => {
    setTargetHeight(value);

    if (lockAspectRatio && originalWidth && originalHeight && value > 0) {
      const calculatedWidth = Math.max(1, Math.round((value * originalWidth) / originalHeight));
      setTargetWidth(calculatedWidth);
    }
  };

  const handleResize = () => {
    if (!originalUrl || !originalWidth || !originalHeight) {
      setError(messages.errorNoImage);
      return;
    }

    if (!targetWidth || !targetHeight || targetWidth < 1 || targetHeight < 1) {
      setError(messages.errorInvalidDimensions);
      return;
    }

    const image = new Image();

    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const context = canvas.getContext("2d");

        if (!context) {
          setError(messages.errorProcessing);
          return;
        }

        context.drawImage(image, 0, 0, targetWidth, targetHeight);

        const dataUrl = canvas.toDataURL(outputFormat, outputFormat === "image/jpeg" ? 0.92 : undefined);
        setResizedUrl(dataUrl);
        setError(null);
      } catch {
        setError(messages.errorProcessing);
      }
    };

    image.onerror = () => {
      setError(messages.errorProcessing);
    };

    image.src = originalUrl;
  };

  const downloadFileName = `resized-image.${outputFormat === "image/png" ? "png" : "jpg"}`;

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
        <label htmlFor="image-resizer-upload" className="block text-sm font-medium text-slate-700">
          {messages.uploadLabel}
        </label>
        <p className="mt-1 text-xs text-slate-500">{messages.uploadHint}</p>

        <input
          id="image-resizer-upload"
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mt-3 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 file:mr-3 file:rounded-md file:border-0 file:bg-slate-900 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white hover:file:bg-slate-700"
        />

        {originalWidth && originalHeight && (
          <p className="mt-3 text-sm text-slate-600">
            {messages.originalDimensionsLabel}: {originalWidth} × {originalHeight}
          </p>
        )}

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">{messages.widthLabel}</span>
            <input
              type="number"
              min={1}
              value={targetWidth || ""}
              onChange={(event) => handleWidthChange(Number(event.target.value))}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 focus:ring-2"
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm font-medium text-slate-700">{messages.heightLabel}</span>
            <input
              type="number"
              min={1}
              value={targetHeight || ""}
              onChange={(event) => handleHeightChange(Number(event.target.value))}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 focus:ring-2"
            />
          </label>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={lockAspectRatio}
              onChange={(event) => setLockAspectRatio(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
            />
            {messages.lockAspectRatioLabel}
          </label>

          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <span>{messages.formatLabel}</span>
            <select
              value={outputFormat}
              onChange={(event) => setOutputFormat(event.target.value as OutputFormat)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-slate-300 focus:ring-2"
            >
              <option value="image/png">{messages.pngOption}</option>
              <option value="image/jpeg">{messages.jpegOption}</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={handleResize}
          className="mt-5 inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          {messages.resizeButton}
        </button>

        {error && <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{messages.originalPreviewTitle}</h2>

          {originalUrl ? (
            <img src={originalUrl} alt={messages.originalPreviewTitle} className="mt-4 max-h-[24rem] w-full rounded-lg border border-slate-200 object-contain" />
          ) : (
            <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-medium text-slate-700">{messages.emptyStateTitle}</p>
              <p className="mt-1 text-sm text-slate-500">{messages.emptyStateDescription}</p>
            </div>
          )}
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-slate-900">{messages.resizedPreviewTitle}</h2>

          {resizedUrl ? (
            <>
              <img src={resizedUrl} alt={messages.resizedPreviewTitle} className="mt-4 max-h-[24rem] w-full rounded-lg border border-slate-200 object-contain" />
              <a
                href={resizedUrl}
                download={downloadFileName}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
              >
                {messages.downloadButton}
              </a>
            </>
          ) : (
            <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-medium text-slate-700">{messages.resizedEmptyTitle}</p>
              <p className="mt-1 text-sm text-slate-500">{messages.resizedEmptyDescription}</p>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}
