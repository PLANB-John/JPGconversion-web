import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://jpgconversion-web.vercel.app"),
  title: {
    default: "Global Tools Hub",
    template: "%s | Global Tools Hub"
  },
  description: "A growing collection of clean, practical web tools for creators, marketers, and developers.",
  openGraph: {
    title: "Global Tools Hub",
    description: "A growing collection of clean, practical web tools for creators, marketers, and developers.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:py-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
