import { Cute_Font } from "next/font/google";
import { Lexend_Deca } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

export const mainFont = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});
export const numberFont = Roboto_Mono({ subsets: ["latin"], weight: ["400"] });
