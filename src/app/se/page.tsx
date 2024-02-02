import type { Metadata } from "next";

import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";
import NavigationBar from "@/components/sections/navigation-bar";
import FooterSection from "@/components/sections/footer-section";

import enFlag from "/public/uk-flag.svg";

export const metadata: Metadata = {
  title: "Norrman: All your web services in one place!",
  description: "Hello, world!",
};

export default function Home() {
  return (
    <>
      <header>
        <NavigationBar
          home="Hem"
          homeLink="/se/"
          services="Tjänster"
          contact="Kontakt"
          langTo="/en"
          langName="English"
          langIcon={enFlag}
        />
      </header>

      <main className="flex flex-col justify-between m-w-[70rem] mx-auto px-16">
        <HeroSection
          heading="Hej stjärnsken! Detta är en rubrik"
          subheading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolores voluptates nobis ab assumenda error autem deserunt, laudantium
        explicabo quaerat"
          buttonText="En knapp"
          scrollText="Scrolla ner"
        />

        {/* <div className="border-1 border-t border-slate-200/65" /> */}

        {/* <ServicesSection heading="Tjänster" /> */}

        {/* <div className="border-1 border-t border-slate-200/65" /> */}

        {/* <ContactSection /> */}
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
