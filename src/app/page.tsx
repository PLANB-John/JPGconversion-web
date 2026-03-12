import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">JPG Conversion Web</p>
      <h1 className="text-4xl font-bold text-slate-900">Your Next.js app is working 🎉</h1>
      <p className="max-w-2xl text-base text-slate-600">
        This is a clean starter project built with Next.js App Router, TypeScript, and Tailwind CSS. We can now add JPG
        conversion tools step by step.
      </p>
      <Link
        href="/tools"
        className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Go to Tools
      </Link>
    </main>
  );
}
