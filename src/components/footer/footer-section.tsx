import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="grid grid-cols-3 border-t border-slate-950 dark:border-slate-200/65 dark:text-slate-200/65 px-7 text-xs w-full ">
      <div className="flex flex-row items-center gap-0">
        <div className="relative h-12 aspect-square mr-3">
          <Image className="dark:invert" fill alt="" src={logo}></Image>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="">© 2024 norrman.dev. All rights reserved.</div>
          <div>Designed by norrman.dev</div>
          <div>
            Images designed by vector juice on{" "}
            <Link href="https://www.freepik.com">https://www.freepik.com</Link>.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href="#home"
          className="flex flex-col w-fit group justify-center items-center "
        >
          <FaAngleUp className="text-2xl animate-bounce" />
          <h2 className="border-b border-b-transparent text-sm group-hover:cursor-pointer group-hover:border-b-slate-200 transition-[border]">
            Scroll back up
          </h2>
        </Link>
      </div>

      <div className="flex flex-col items-end">
        <div>GitHub</div>

        <div>email@norrman.com</div>

        <div>change language</div>

        <div>buy me a coffeee</div>

        <div>any suggestions?</div>

        <div className="">Discord?</div>
      </div>
    </div>
  );
}
