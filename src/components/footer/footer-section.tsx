import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa";
import DarkModeLink from "@/components/footer/dark-mode-link";

interface FooterSectionProps {
  langChangeURL: string;
  textContent: {
    backUp: string;
    sourceCode: string;
    langChange: string;
    changeTo: string;
    sendMail: string;
    connect: string;
  };
}

export default function FooterSection({
  langChangeURL,
  textContent: { backUp, sourceCode, langChange, changeTo, sendMail, connect },
}: FooterSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2 lg:grid-cols-3 border-t border-slate-950 dark:border-slate-200/65 text-slate-950/50 dark:text-slate-200/65 px-5 mt-24 text-[0.666rem] w-full ">
      <div className="flex flex-row items-center justify-center sm:justify-normal gap-0 order-last sm:order-1">
        <div className="relative h-14 aspect-square mr-3">
          <Image className="dark:invert" fill alt="" src={logo}></Image>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="">© 2024 norrman.dev. All rights reserved.</div>
          <div>Designed by norrman.dev</div>
          <div>
            Images designed by vectorjuice on{" "}
            <Link className="hover:underline" href="https://www.freepik.com">
              https://www.freepik.com
            </Link>
            .
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center col-span-1 sm:col-span-2 lg:col-span-1 order-first lg:order-1">
        <Link
          href="#home"
          className="flex flex-col w-fit group justify-center items-center "
        >
          <FaAngleUp className="text-xl animate-bounce" />
          <h2 className="border-b border-b-transparent text-sm group-hover:cursor-pointer group-hover:border-b-slate-200 transition-[border]">
            {backUp}
          </h2>
        </Link>
      </div>

      <div className="flex flex-row  justify-center sm:justify-end gap-5 sm:gap-20 text-right order-0 sm:order-last">
        <div className="flex flex-col items-end w-1/2 sm:w-auto">
          <h2 className="text-sm border-b w-fit border-slate-900/50 dark:border-slate-200/65 mb-1">
            norrman<span className="text-blueTo text-base">.</span>dev
          </h2>
          <Link className="hover:underline" href={langChangeURL}>
            {langChange} version
          </Link>
          <DarkModeLink changeTo={changeTo} />
          <Link
            className="hover:underline"
            href="https://pagespeed.web.dev/analysis/https-norrman-dev-se/zb5xt6vxyk?form_factor=desktop"
          >
            PageSpeed Insight
          </Link>
          <Link
            className="hover:underline"
            href="https://github.com/n0rrman/norrman.dev"
          >
            {sourceCode}
          </Link>
        </div>
        <div className="flex flex-col items-start sm:items-end w-1/2 sm:w-auto">
          <h2 className="text-sm border-b w-fit border-slate-900/50 dark:border-slate-200/65 mb-1">
            {connect}
            <span className="text-blueTo text-base">.</span>
          </h2>
          <Link className="hover:underline" href="https://github.com/n0rrman/">
            GitHub
          </Link>
          <Link
            className="hover:underline"
            href="https://discordapp.com/users/235864356980523009"
          >
            Discord
          </Link>
          <Link
            className="hover:underline"
            href="mailto:email@henriknorrman.com"
          >
            {sendMail}
          </Link>
          <Link
            className="hover:underline"
            href="https://www.buymeacoffee.com/norrman"
          >
            Buy Me a Coffee
          </Link>
        </div>
      </div>
    </div>
  );
}
