"use client";

import { useMemo, useRef, useState, type ChangeEvent, type MouseEvent } from "react";
import type { ExtractorMessages } from "@/data/imageColorExtractorMessages";

type SelectedColor = {
  hex: string;
  rgb: string;
};

type Props = {
  messages: ExtractorMessages;
};

const MAX_HISTORY = 5;

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

export function ImageColorExtractorTool({ messages }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<SelectedColor | null>(null);
  const [recentColors, setRecentColors] = useState<SelectedColor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<"hex" | "rgb" | null>(null);

  const hasImage = Boolean(imageSrc);

  const selectedStyle = useMemo(
    () => ({ backgroundColor: selectedColor?.hex ?? "#E2E8F0" }),
    [selectedColor?.hex]
  );

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setSelectedFileName("");
      return;
    }

    setSelectedFileName(file.name);

    if (!file.type.startsWith("image/")) {
      setImageSrc(null);
      setSelectedColor(null);
      setError(messages.errorInvalidFile);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (!result) {
        setError(messages.errorLoadFailed);
        return;
      }

      setImageSrc(result);
      setSelectedColor(null);
      setError(null);
      setCopiedType(null);
    };

    reader.onerror = () => {
      setImageSrc(null);
      setSelectedColor(null);
      setError(messages.errorLoadFailed);
    };

    reader.readAsDataURL(file);
  };

  const handleImageLoad = () => {
    if (!canvasRef.current || !imageRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const image = imageRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!context) {
      setError(messages.errorLoadFailed);
      return;
    }

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    context.drawImage(image, 0, 0);
  };

  const handleImageClick = (event: MouseEvent<HTMLImageElement>) => {
    if (!canvasRef.current || !imageRef.current) {
      return;
    }

    const imageElement = imageRef.current;
    const rect = imageElement.getBoundingClientRect();
    const scaleX = imageElement.naturalWidth / rect.width;
    const scaleY = imageElement.naturalHeight / rect.height;

    const x = Math.min(Math.max(Math.floor((event.clientX - rect.left) * scaleX), 0), imageElement.naturalWidth - 1);
    const y = Math.min(Math.max(Math.floor((event.clientY - rect.top) * scaleY), 0), imageElement.naturalHeight - 1);

    const context = canvasRef.current.getContext("2d", { willReadFrequently: true });
    if (!context) {
      return;
    }

    const [r, g, b] = context.getImageData(x, y, 1, 1).data;

    const nextColor = {
      hex: rgbToHex(r, g, b),
      rgb: `rgb(${r}, ${g}, ${b})`
    };

    setSelectedColor(nextColor);
    setError(null);
    setCopiedType(null);
    setRecentColors((prev) => {
      const deduped = prev.filter((item) => item.hex !== nextColor.hex);
      return [nextColor, ...deduped].slice(0, MAX_HISTORY);
    });
  };

  const handleCopy = async (value: string, type: "hex" | "rgb") => {
    try {
      if (!navigator.clipboard) {
        setError(messages.copyNotSupported);
        return;
      }

      await navigator.clipboard.writeText(value);
      setCopiedType(type);
      setError(null);
    } catch {
      setError(messages.copyNotSupported);
    }
  };

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

      <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <label htmlFor="image-upload" className="mb-3 block text-sm font-medium text-slate-700">
            {messages.uploadLabel}
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="sr-only"
            />
            <label
              htmlFor="image-upload"
              className="inline-flex cursor-pointer items-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {messages.chooseFile}
            </label>
            <span className="text-sm text-slate-600">{selectedFileName || messages.noFileChosen}</span>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3">
            {hasImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={imageRef}
                src={imageSrc ?? undefined}
                alt={messages.imageAlt}
                onLoad={handleImageLoad}
                onClick={handleImageClick}
                className="mx-auto max-h-[420px] w-auto max-w-full cursor-crosshair rounded-lg"
              />
            ) : (
              <p className="py-16 text-center text-sm text-slate-500">{messages.emptyState}</p>
            )}
          </div>
          <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900">{messages.selectedColorTitle}</h2>
            <p className="mt-1 text-sm text-slate-600">{messages.selectedColorHint}</p>

            <div className="mt-4 h-16 rounded-lg border border-slate-200" style={selectedStyle} />

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-medium text-slate-700">{messages.hexLabel}</p>
                <div className="mt-1 flex items-center gap-2">
                  <code className="rounded bg-slate-100 px-2 py-1 text-slate-800">
                    {selectedColor?.hex ?? "-"}
                  </code>
                  <button
                    type="button"
                    onClick={() => selectedColor && handleCopy(selectedColor.hex, "hex")}
                    disabled={!selectedColor}
                    className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copiedType === "hex" ? messages.copied : messages.copyHex}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-medium text-slate-700">{messages.rgbLabel}</p>
                <div className="mt-1 flex items-center gap-2">
                  <code className="rounded bg-slate-100 px-2 py-1 text-slate-800">
                    {selectedColor?.rgb ?? "-"}
                  </code>
                  <button
                    type="button"
                    onClick={() => selectedColor && handleCopy(selectedColor.rgb, "rgb")}
                    disabled={!selectedColor}
                    className="rounded-md border border-slate-300 px-2.5 py-1 text-xs font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copiedType === "rgb" ? messages.copied : messages.copyRgb}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900">{messages.recentColorsTitle}</h2>
            <ul className="mt-3 space-y-2">
              {recentColors.length === 0 && <li className="text-sm text-slate-500">-</li>}
              {recentColors.map((color) => (
                <li key={color.hex} className="flex items-center justify-between rounded-lg border border-slate-200 p-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded border border-slate-300" style={{ backgroundColor: color.hex }} />
                    <code className="text-xs text-slate-700">{color.hex}</code>
                  </div>
                  <span className="text-xs text-slate-500">{color.rgb}</span>
                </li>
              ))}
            </ul>
          </div>

          {error && <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
        </aside>
      </section>
    </div>
  );
}
