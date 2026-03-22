import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { getMetadataBase } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
