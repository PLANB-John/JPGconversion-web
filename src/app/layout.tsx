import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JPG Conversion Web",
  description: "A simple Next.js starter for JPG conversion tools."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-3xl px-6 py-16">{children}</div>
      </body>
    </html>
  );
}
