import type { Metadata } from "next";
import { Grape_Nuts } from "next/font/google";
import "./globals.css";

const grape = Grape_Nuts({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "norrman.dev",
  description: "Hello, world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grape.className}>{children}</body>
    </html>
  );
}
