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
    <section id="hero" className="flex flex-col items-center h-[70vh] w-full">
      <div className="flex flex-col-reverse md:flex-row h-[70vh] md:h-[calc(85vh-8rem)] w-full items-center justify-center gap-2 xl:gap-10 transition-all">
        <div className="flex flex-col items-center md:items-start w-[20rem] mini:w-[23rem] sm:w-[30rem] xl:w-[40rem] pl-0 md:pl-10 flex-0 gap-6 lg:gap-8 xl:gap-12 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {heading}
            <span className="text-fuchsia-700">!</span>
          </h1>
          <p className="text-normal lg:text-lg xl:text-2xl">{subheading}</p>
          <Link
            className="w-10/12 md:w-max px-8 my-5 md:my-0 py-3 text-xl rounded-[3rem] text-slate-200 bg-gradient-to-tr from-blueFrom to-blueTo shadow-lg"
            href="#contact"
          >
            {buttonText}
          </Link>
        </div>
        <div className="relative flex justify-center items-center aspect-[1.6] w-[20rem] mini:w-[23rem] sm:w-[29rem] md:w-[25rem] lg:w-[32.5rem] xl:w-[40rem]">
          <Image
            className="object-contain mix-blend-multiply dark:mix-blend-hard-light select-none pointer-events-none contrast-125 dark:contrast-100 brightness-[0.9] dark:brightness-100"
            src={heroImg}
            priority
            alt=""
            fill
          />
        </div>
      </div>

      <HideOnScroll
        className="py-[4vh] mb-[-15vh] flex justify-center"
        threshold={200}
      >
        <Link
          href="#contact-form"
          className="flex flex-col w-fit group justify-center items-center "
        >
          <h2 className="border-b border-b-transparent group-hover:cursor-pointer group-hover:border-b-slate-200 transition-[border] m-2">
            {scrollText}
          </h2>
          <FaAngleDown className="text-2xl animate-bounce" />
        </Link>
      </HideOnScroll>
    </section>
  );
}
