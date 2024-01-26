import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

import NavigationBar from "./components/navigation-bar";

const font = Lexend_Deca({ subsets: ["latin"], weight: ["400", "600"] });

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
      <body
        className={`${font.className} flex flex-col items-center justify-center bg-blue-950`}
      >
        <header className="flex justify-center items-center w-full">
          <NavigationBar />
        </header>
        <main>{children}</main>
        <footer className="h-10 bg-slate-500 w-full">Footer</footer>
      </body>
    </html>
  );
}
