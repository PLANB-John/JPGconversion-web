import type { Metadata } from "next";
import { AdSense } from "@/components/AdSense";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/data/site";
import { getMetadataBase } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: "Multilingual browser-based tools and guides for image, SEO, marketing, and developer workflows.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "online tools",
    "image tools",
    "seo tools",
    "developer tools",
    "multilingual tools"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  verification: {
    // Set this during deployment when Search Console verification is ready.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    "google-adsense-account": "ca-pub-7078124525466670"
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
        <AdSense />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
