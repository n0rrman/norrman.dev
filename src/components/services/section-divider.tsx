import Image from "next/image";

import sectionDivider from "/public/section-divider.svg";

interface SectionDividerProps {
  top?: boolean;
  bottom?: boolean;
}

export default function SectionDivider({
  top = false,
  bottom = false,
}: SectionDividerProps) {
  return (
    <div
      className={`${top ? "mt-[-25vh] xl:mt-[-30vh]" : ""} ${
        bottom ? "mb-[-25vh] xl:mb-[-30vh]" : ""
      } relative w-full h-[25vh] xl:h-[30vh] z-0 object-cover pointer-events-none select-none`}
    >
      <Image
        src={sectionDivider}
        alt=""
        className={`${
          top ? "rotate-180" : ""
        }  object-fill w-full invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all`}
        fill
      />
    </div>
  );
}
