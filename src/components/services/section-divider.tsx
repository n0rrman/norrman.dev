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

export default function SectionDivider({
  top = false,
  bottom = false,
  slope = true,
  wave = false,
}: SectionDividerProps) {
  return (
    <div
      className={`${
        top
          ? // ? "mt-[-25vh] w-[640px] mini:mt-[-30vh] md:mt-[-42.5vh] xl:mt-[-47.5vh] 2xl:mt-[-60vh] h-[15vh] mini:h-[20vh] md:h-[35vh] xl:h-[40vh] 2xl:h-[60vh]"
            // "mt-[-4vw] h-[150vw] aspect-[1]"
            "h-[100vh] mt-[-102.5vh] lg:h-[40vh] lg:mt-[-45vh]"
          : ""
      } ${
        bottom ? "h-[150vh] mb-[-140vh] lg:h-[15vh] lg:mb-[-15vh]" : ""
      } relative z-0 pointer-events-none select-none`}
    >
      <Image
        src={slopeDivider}
        alt=""
        className={`${
          top ? "rotate-0" : "rotate-180"
        }  object-cover lg:object-fill invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 transition-all`}
        fill
      />
    </div>
  );
}
