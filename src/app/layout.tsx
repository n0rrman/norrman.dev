import { mainFont } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${mainFont.className} flex flex-col items-center justify-center bg-bluishWhite dark:bg-slate-900`}
      >
        <Providers>
          <div className="w-full text-slate-800 dark:text-slate-200 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-rose-50 to-blue-100 dark:from-red-950 dark:to-blue-950">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
