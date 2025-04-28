import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habbit",
  description: "Track habits and todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased p-8`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <div className="space-y-6">
            <Header />
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
