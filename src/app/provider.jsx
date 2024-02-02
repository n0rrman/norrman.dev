"use client";

import { ThemeProvider } from "next-themes";


export function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  );
}
