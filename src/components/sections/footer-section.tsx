import Image from "next/image";
import logo from "/public/logo.svg";

export default function FooterSection() {
  return (
    <div className="flex flex-row justify-between border-t border-slate-200/65 dark:text-slate-200/65 px-7 text-xs w-full ">
      <div className="flex flex-col items-center gap-2">
        <div className="relative h-14 aspect-square">
          <Image className="dark:invert" fill alt="" src={logo}></Image>
        </div>
        <div className="">© 2024 norrman.dev</div>
      </div>
      <div className="flex flex-col items-end">
        <div>Designed by norrman.dev</div>

        <div>GitHub</div>

        <div>Images designed by vector juice on https://www.freepik.com.</div>

        <div>email@norrman.com</div>

        <div>change language</div>

        <div>Scroll up</div>

        <div>buy me a coffeee</div>

        <div>any suggestions?</div>

        <div className="">Discord?</div>
      </div>
    </div>
  );
}
