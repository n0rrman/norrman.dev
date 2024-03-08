import Image, { StaticImageData } from "next/image";
import { FaRegCircleDot } from "react-icons/fa6";

import { TiTick, TiTimes } from "react-icons/ti";

import { numberFont } from "@/app/fonts";

interface ServiceBoxProps {
  number: number;
  title: string;
  text: string;
  numberText: string;
  enabled: string;
  disabled: string;
  keywords: string[];
  img: StaticImageData;
}

export default function ServiceBox({
  number,
  title,
  text,
  numberText,
  enabled,
  disabled,
  keywords,
  img,
}: ServiceBoxProps) {
  const renderedTags = keywords.map((keyword) => {
    return (
      <div
        className="bg-slate-900/10 dark:bg-slate-200/20 px-2.5 py-0.5 w-max text-sm rounded-2xl"
        key={keyword}
      >
        {keyword}
      </div>
    );
  });
  return (
    <div className="flex -mt-8 h-full">
      <div className="flex flex-row items-start justify-center h-full ml-[-1rem] md:ml-0 ">
        <div className="flex flex-row items-center justify-start mt-10">
          <div className="hidden sm:block text-sm">{numberText}</div>
          <div className={`${numberFont.className} px-1 text-3xl`}>
            {number}
          </div>
        </div>
        <div className="hidden xs:flex text-3xl sm:text-4xl mr-[-1.1rem] sm:mr-[-1.25rem] mt-[2.7rem] sm:mt-10 justify-center items-center">
          <FaRegCircleDot className="text-blueTo z-50" />
        </div>
        <div className="relative flex flex-row pt-10 border-l-4 border-slate-500 pl-3 sm:pl-4 h-full w-full z-10">
          <div className="hidden xs:block border-t-4 mt-4 border-blueTo w-6 sm:w-12 lg:w-28" />
          <div className="flex flex-col items-center h-full w-full pb-8">
            <div className="flex flex-col pl-1 sm:pl-4 gap-1">
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <div className="flex flex-col text-slate-700 dark:text-slate-300 font-light max-w-[60rem] text-sm md:text-base gap-5">
                <p className="">{text}</p>
                <div className="flex flex-row flex-wrap gap-2">
                  {renderedTags}
                </div>
                <div className="flex flex-col sm:flex-row gap-5 py-4 leading-7">
                  <div className="bg-green-500/10 rounded-xl p-5 py-5 space-y-5 w-full sm:w-1/2">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <TiTick className="text-green-500 text-2xl" />
                      <h3 className="font-bold w-full tracking-wide">
                        I'm interested
                      </h3>
                    </div>
                    <p className="tracking-tight">{enabled}</p>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-5 py-5 space-y-5 w-full sm:w-1/2">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <TiTimes className="text-red-500 text-2xl" />
                      <h3 className="font-bold w-full tracking-wide">
                        I'm NOT interested
                      </h3>
                    </div>
                    <p className="tracking-tight">{disabled}</p>
                  </div>
                </div>
              </div>
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
