import Image, { StaticImageData } from "next/image";
import { FaRegCircleDot } from "react-icons/fa6";

import { numberFont } from "@/app/fonts";

interface ServiceBoxProps {
  number: number;
  title: string;
  text: string;
  numberText: string;
  img: StaticImageData;
}

export default function ServiceBox({
  number,
  title,
  text,
  numberText,
  img,
}: ServiceBoxProps) {
  return (
    <div className="flex -mt-8 h-full">
      <div className="flex flex-row items-start justify-center h-full ml-[-1rem] md:ml-0 px-0 md:px-2 lg:px-6 ">
        <div className="flex flex-row items-center justify-start mt-9">
          <div className="hidden sm:block text-lg">{numberText}</div>
          <div className={`${numberFont.className} px-2 text-4xl`}>
            {number}
          </div>
        </div>
        <div className="hidden xs:flex text-3xl sm:text-4xl mr-[-1.1rem] sm:mr-[-1.25rem] mt-[2.7rem] sm:mt-10 justify-center items-center">
          <FaRegCircleDot className="text-blueTo " />
        </div>
        <div className="relative flex flex-row pt-10 border-l-4 border-slate-400/50 pl-3 sm:pl-4 h-full w-full">
          <div className="hidden xs:block border-t-4 mt-4 border-blueTo w-6 sm:w-16 md:w-28" />
          <div className="flex flex-col items-center lg:items-start lg:flex-row h-full w-full ">
            <div className="flex flex-col pl-1 sm:pl-4">
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <p className="text-slate-700 dark:text-slate-300 font-light max-w-[60rem] text-sm md:text-base">
                {text}
              </p>
            </div>
            <div className="hidden sm:block relative w-1/2 aspect-square dark:mix-blend-difference">
              <Image fill src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
