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
import FlatDivider from "./flat-divider";

interface ServicesSectionProps {
  textContent: {
    heading: string;
    introText: string;
    servicesText: string;
    numberText: string;
    sections: {
      number: number;
      title: string;
      enabled: string;
      disabled: string;
      keywords: string[];
      text: string;
    }[];
  };
}

export default function ServicesSection({
  textContent: { heading, introText, servicesText, numberText, sections },
}: ServicesSectionProps) {
  return (
    <section className="my-[25vh] w-full">
      <SectionDivider slope top />

      <div className="flex bg-bluishWhite dark:bg-slate-900 justify-center py-[15vh]">
        <div id="services" className="-mt-24"></div>
        <div className="container flex flex-col gap-4 max-w-[60rem] mx-8 md:mx-16">
          <h1 className="text-2xl md:text-3xl tracking-widest uppercase flex flex-row items-center gap-8">
            <FaTasks className="text-blueTo" />
            <div className="text-slate-950 dark:text-slate-200">
              {heading}
              <span className="text-blueTo">.</span>
            </div>
          </h1>
          <div className="pb-10 text-sm md:text-base max-w-[75ch] space-y-5">
            <p>{introText}</p>
            <p>{servicesText}</p>
          </div>

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
            enabled={sections[0].enabled}
            disabled={sections[0].disabled}
            keywords={sections[0].keywords}
            img={designImg}
          />
          <ServiceBox
            number={sections[1].number}
            numberText={numberText}
            title={sections[1].title}
            text={sections[1].text}
            enabled={sections[1].enabled}
            disabled={sections[1].disabled}
            keywords={sections[1].keywords}
            img={developmentImg}
          />
          <ServiceBox
            number={sections[2].number}
            numberText={numberText}
            title={sections[2].title}
            text={sections[2].text}
            enabled={sections[2].enabled}
            disabled={sections[2].disabled}
            keywords={sections[2].keywords}
            img={devOpsImg}
          />
          <ServiceBox
            number={sections[3].number}
            numberText={numberText}
            title={sections[3].title}
            text={sections[3].text}
            enabled={sections[3].enabled}
            disabled={sections[3].disabled}
            keywords={sections[3].keywords}
            img={maintenanceImg}
          />
        </div>
      </div>

      <FlatDivider />
    </section>
  );
}
