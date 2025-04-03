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
        <div className="flex flex-col gap-6">
          <div className="flex">
            <h1 className="text-3xl font-bold">Habit Tracker</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
