import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

import heroImg from "/public/heroImg.svg";
import HideOnScroll from "@/components/hero/hide-on-scroll";

interface HeroSectionProps {
  textContent: {
    heading: string;
    subheading: string;
    buttonText: string;
    scrollText: string;
  };
}

export default function HeroSection({
  textContent: { heading, subheading, buttonText, scrollText },
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-full max-w-[30rem] md:max-w-[85rem] -pl-0 -pr-5 md:-pl-5 mx-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[65vh] md:min-h-[calc(80vh-8rem)] w-full items-start md:items-center justify-center gap-5 sm:gap-8 xl:gap-24 transition-all pb-5 md:pb-0">
        <div className="flex flex-col items-center md:items-start w-full max-w-[40rem] pl-0 md:pl-10 flex-0 gap-6 lg:gap-8 text-center md:text-left">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-semibold">
            {heading}
            <span className="text-fuchsia-700">!</span>
          </h1>
          <p className="text-sm xs:text-base md:text-sm lg:text-base xl:text-lg">
            {subheading}
          </p>
          <Link
            className="w-full md:w-max px-8 my-5 md:my-0 py-3 text-xl rounded-[3rem] text-slate-200 bg-gradient-to-tr from-blueFrom hover:shadow-xl hover:contrast-125 hover:brightness-90 transition-all to-blueTo shadow-lg"
            href="#contact"
          >
            {buttonText}
          </Link>
        </div>
        <div className="m-0 md:-m-5 relative flex justify-center items-center aspect-[1.5] w-full order-first md:order-last">
          <Image
            className="object-contain mix-blend-multiply dark:mix-blend-hard-light select-none pointer-events-none contrast-125 dark:contrast-100 brightness-[0.9] dark:brightness-100"
            src={heroImg}
            priority
            loading="eager"
            alt=""
            fill
          />
        </div>
      </div>
      <div className="mb-[-15vh] py-10">
        <HideOnScroll className="flex justify-center" threshold={200}>
          <Link
            href="#services"
            className="flex flex-col w-fit group justify-center items-center"
          >
            <h2 className="border-b border-b-transparent group-hover:cursor-pointer group-hover:border-b-slate-200 transition-[border] m-2">
              {scrollText}
            </h2>
            <FaAngleDown className="text-2xl animate-bounce" />
          </Link>
        </HideOnScroll>
      </div>
    </section>
  );
}
