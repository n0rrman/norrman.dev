import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

import { Provider } from "./provider";

const font = Lexend_Deca({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${font.className} flex flex-col items-center justify-center bg-blue-100 dark:bg-blue-950 transition`}
      >
        <Provider>
          <div className="w-full text-slate-800 dark:text-slate-200 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-rose-50 to-blue-100 dark:from-red-950 dark:to-blue-950 transition-all duration-100">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
