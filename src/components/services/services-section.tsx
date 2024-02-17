import { FaTasks } from "react-icons/fa";

import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { VscServerProcess } from "react-icons/vsc";
import designImg from "/public/design.svg";
import developmentImg from "/public/development.svg";
import devOpsImg from "/public/devops.svg";
import maintenanceImg from "/public/maintenance.svg";

// import ServiceButtonBar from "../dev/service-button-bar";
import ServiceBox from "./service-box";
import SectionDivider from "./section-divider";

interface ServicesSectionProps {
  textContent: {
    heading: string;
    introText: string;
    numberText: string;
    sections: { number: number; title: string; text: string }[];
  };
}

export default function ServicesSection({
  textContent: { heading, introText, numberText, sections },
}: ServicesSectionProps) {
  return (
    <section className="my-[25vh] min-h-screen w-full">
      <SectionDivider top />

      <div className="flex bg-bluishWhite dark:bg-slate-900 flex-col gap-8 px-10 md:px-20 py-32">
        <h1
          id="services"
          className="text-2xl md:text-3xl tracking-widest uppercase flex flex-row items-center gap-8"
        >
          <FaTasks className="text-blueTo" />
          <div className="text-slate-950 dark:text-slate-200">
            {heading}
            <span className="text-blueTo">.</span>
          </div>
        </h1>
        <p className="pb-10 text-sm md:text-base">{introText}</p>

        {/* // DO NOT DELETE THIS
        <h2 className="uppercase text-sm text-blueTo -mb-6 tracking-widest font-semibold">
          Select services ya want, mon:
        </h2>
        <ServiceButtonBar
          buttons={[
            ["UI design", <LiaSwatchbookSolid key="ui" />],
            ["Development", <FaCode key="dev" />],
            ["DevOps", <MdOutlineRocketLaunch key="devops" />],
            ["Maintenance", <VscServerProcess key="maintenance" />],
          ]}
        />
        <div className="flex flex-row pl-16">
          <div className="w-[4.5rem] border-slate-400/50 border-4 h-10 border-t-0 border-r-0 rounded-bl-lg" />
          <div className="w-[4.5rem] border-slate-400/50 border-4 h-10 border-t-0 border-l-0" />
          <div className="w-36 border-slate-400/50 border-4 h-10 border-t-0 border-l-0" />
          <div className="w-36 border-slate-400/50 border-4 h-10 border-t-0 border-l-0 rounded-br-lg" />
        </div>
        // DO NOT DELETE THIS */}

        <ServiceBox
          number={sections[0].number}
          numberText={numberText}
          title={sections[0].title}
          text={sections[0].text}
          img={designImg}
        />
        <ServiceBox
          number={sections[1].number}
          numberText={numberText}
          title={sections[1].title}
          text={sections[1].text}
          img={developmentImg}
        />
        <ServiceBox
          number={sections[2].number}
          numberText={numberText}
          title={sections[2].title}
          text={sections[2].text}
          img={devOpsImg}
        />
        <ServiceBox
          number={sections[3].number}
          numberText={numberText}
          title={sections[3].title}
          text={sections[3].text}
          img={maintenanceImg}
        />
      </div>

      <SectionDivider bottom />
    </section>
  );
}
