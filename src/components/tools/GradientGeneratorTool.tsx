"use client";

import { useMemo, useState } from "react";
import type { GradientGeneratorMessages } from "@/data/gradientGeneratorMessages";

type Props = {
  messages: GradientGeneratorMessages;
};

type GradientType = "linear" | "radial";

type Preset = {
  name: string;
  type: GradientType;
  angle: number;
  colors: [string, string, string?];
};

const presets: Preset[] = [
  { name: "Sunset", type: "linear", angle: 120, colors: ["#ff7e5f", "#feb47b"] },
  { name: "Ocean", type: "linear", angle: 90, colors: ["#2193b0", "#6dd5ed", "#ccf2ff"] },
  { name: "Berry", type: "radial", angle: 180, colors: ["#a770ef", "#cf8bf3", "#fdb99b"] }
];

function buildGradient(type: GradientType, angle: number, colors: string[]) {
  if (type === "radial") {
    return `radial-gradient(circle, ${colors.join(", ")})`;
  }

  return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
}

export function GradientGeneratorTool({ messages }: Props) {
  const [gradientType, setGradientType] = useState<GradientType>("linear");
  const [angle, setAngle] = useState(90);
  const [color1, setColor1] = useState("#4f46e5");
  const [color2, setColor2] = useState("#06b6d4");
  const [color3, setColor3] = useState("#22c55e");
  const [useThirdColor, setUseThirdColor] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeColors = useMemo(() => {
    return useThirdColor ? [color1, color2, color3] : [color1, color2];
  }, [color1, color2, color3, useThirdColor]);

  const gradientValue = useMemo(() => {
    return buildGradient(gradientType, angle, activeColors);
  }, [activeColors, angle, gradientType]);

  const cssCode = `background: ${gradientValue};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const applyPreset = (preset: Preset) => {
    setGradientType(preset.type);
    setAngle(preset.angle);
    setColor1(preset.colors[0]);
    setColor2(preset.colors[1]);

    if (preset.colors[2]) {
      setColor3(preset.colors[2]);
      setUseThirdColor(true);
      return;
    }

    setUseThirdColor(false);
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{messages.title}</h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{messages.description}</p>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <h2 className="text-sm font-semibold text-slate-900">{messages.howToUseTitle}</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
            {messages.howToUseSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="gradient-type" className="block text-sm font-medium text-slate-700">
                {messages.gradientTypeLabel}
              </label>
              <select
                id="gradient-type"
                value={gradientType}
                onChange={(event) => setGradientType(event.target.value as GradientType)}
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800"
              >
                <option value="linear">{messages.linearOption}</option>
                <option value="radial">{messages.radialOption}</option>
              </select>
            </div>

            {gradientType === "linear" && (
              <div>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="gradient-angle" className="font-medium text-slate-700">
                    {messages.angleLabel}
                  </label>
                  <span className="text-slate-600">{angle}°</span>
                </div>
                <input
                  id="gradient-angle"
                  type="range"
                  min={0}
                  max={360}
                  step={1}
                  value={angle}
                  onChange={(event) => setAngle(Number(event.target.value))}
                  className="mt-2 w-full accent-slate-900"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>{messages.firstColorLabel}</span>
                <input type="color" value={color1} onChange={(event) => setColor1(event.target.value)} className="h-11 w-full cursor-pointer rounded-md border border-slate-300" />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>{messages.secondColorLabel}</span>
                <input type="color" value={color2} onChange={(event) => setColor2(event.target.value)} className="h-11 w-full cursor-pointer rounded-md border border-slate-300" />
              </label>
            </div>

            {useThirdColor && (
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>{messages.thirdColorLabel}</span>
                <input type="color" value={color3} onChange={(event) => setColor3(event.target.value)} className="h-11 w-full cursor-pointer rounded-md border border-slate-300" />
              </label>
            )}

            <button
              type="button"
              onClick={() => setUseThirdColor((current) => !current)}
              className="inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {useThirdColor ? messages.removeThirdColorButton : messages.addThirdColorButton}
            </button>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-sm font-semibold text-slate-900">{messages.previewLabel}</h2>
          <div className="mt-3 h-56 w-full rounded-xl border border-slate-200" style={{ background: gradientValue }} />

          <h3 className="mt-6 text-sm font-semibold text-slate-900">{messages.generatedCssLabel}</h3>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100 sm:text-sm">{cssCode}</pre>
          <button
            type="button"
            onClick={handleCopy}
            className="mt-3 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {copied ? messages.copiedButton : messages.copyButton}
          </button>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-sm font-semibold text-slate-900">{messages.presetsLabel}</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {presets.map((preset) => {
            const style = { background: buildGradient(preset.type, preset.angle, preset.colors.filter(Boolean) as string[]) };

            return (
              <button
                key={preset.name}
                type="button"
                onClick={() => applyPreset(preset)}
                className="overflow-hidden rounded-xl border border-slate-200 text-left transition hover:border-slate-400"
              >
                <div className="h-20" style={style} />
                <p className="px-3 py-2 text-sm font-medium text-slate-700">{preset.name}</p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
