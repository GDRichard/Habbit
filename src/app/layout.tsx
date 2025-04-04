import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habbit",
  description: "Track your daily/weekly habits and todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased p-8`}>
        <div className="space-y-6">
          <div className="flex">
            <h1 className="text-3xl font-bold">Habbit</h1>
          </div>
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
