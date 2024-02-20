import Image from "next/image";

import sectionDivider from "/public/section-divider.svg";
import waveDivider from "/public/wave-divider.svg";
import slopeDivider from "/public/slope-divider.svg";
// import slopeDivider from "/public/pointy-divider.svg";

interface SectionDividerProps {
  top?: boolean;
  bottom?: boolean;
  slope?: boolean;
  wave?: boolean;
}

export default function FlatDivider({
  top = false,
  bottom = false,
  slope = true,
  wave = false,
}: SectionDividerProps) {
  return (
    <div className="absolute overflow-hidden w-screen z-20 h-[20vh] mt-[-10vh] bg-bluishWhite dark:bg-slate-900 -skew-y-3"></div>
  );
}
