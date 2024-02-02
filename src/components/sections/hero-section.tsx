import Image from "next/image";

import heroImg from "/public/heroImg.svg";
import HideOnScroll from "../hide-on-scroll";
import { FaAngleDown } from "react-icons/fa";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  buttonText: string;
  scrollText: string;
}

export default function HeroSection({
  heading,
  subheading,
  buttonText,
  scrollText,
}: HeroSectionProps) {
  return (
    <section id="hero" className="flex flex-col">
      <div className="flex flex-col-reverse md:flex-row h-[calc(85vh-8rem)] items-center justify-between gap-8">
        <div className="flex flex-col w-full md:w-1/2 gap-8">
          <h1 className="text-5xl font-semibold">
            {heading}
            <span className="text-fuchsia-700">!</span>
          </h1>
          <p className="text-2xl">{subheading}</p>
          <button className=" w-max px-8 py-3 text-xl rounded-[3rem] bg-gradient-to-tr from-blueFrom to-blueTo shadow-lg">
            {buttonText}
          </button>
        </div>
        <div className="w-full md:w-1/2 aspect-square">
          <div className="relative h-full w-full">
            <Image
              className="object-contain mix-blend-multiply dark:mix-blend-hard-light"
              src={heroImg}
              fill
              priority
              alt=""
            />
          </div>
        </div>
      </div>

      <HideOnScroll
        className="flex flex-col justify-center items-center text-lg py-[4vh] group"
        threshold={200}
      >
        <h2 className="m-2.5">{scrollText}</h2>
        <FaAngleDown className="text-2xl animate-bounce" />
      </HideOnScroll>
    </section>
  );
}
