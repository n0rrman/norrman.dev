import type { Metadata } from "next";

import enFlag from "/public/uk-flag.svg";
import NavigationBar from "@/components/navigation/navigation-bar";
import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import ContactSection from "@/components/contact/contact-section";
import FooterSection from "@/components/footer/footer-section";

import * as errors from "@/error-messages";

export const metadata: Metadata = {
  title: "Norrman: SWE",
  description: "Hej, världen!",
};

export default function Home() {
  return (
    <>
      <header>
        <NavigationBar
          textContent={{
            home: "Hem",
            services: "Tjänster",
            contact: "Kontakt",
            lang: "English",
            github: "Källkod",
          }}
          langTo="/en/"
          langIcon={enFlag}
        />
      </header>
      <main>
        <HeroSection
          textContent={{
            heading: "Hej, hej! Detta är en rubrik",
            subheading:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores voluptates nobis ab assumenda error autem deserunt, laudantium explicabo quaerat",
            buttonText: "En knapp",
            scrollText: "Scrolla ner",
          }}
        />
        <ServicesSection
          textContent={{
            heading: "Tjänster",
            introText:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum tempora sit temporibus, consequatur dicta pariatur quis minus. Voluptatibus eligendi consequatur nemo laudantium numquam ipsam facere aspernatur eos aliquam aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum tempora sit temporibus, consequatur dicta pariatur quis minus. Voluptatibus eligendi consequatur nemo laudantium numquam ipsam facere aspernatur eos aliquam aliquid.",
            numberText: "Steg",
            sections: [
              {
                number: 1,
                title: "UI design",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
              {
                number: 2,
                title: "Utveckling",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
              {
                number: 3,
                title: "DevOps",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
              {
                number: 4,
                title: "Underhåll",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
            ],
          }}
        />
        <ContactSection
          textContent={{
            heading: "Kontakt",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dicta nulla quaerat reiciendis dolore dignissimosLorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dicta nulla quaerat reiciendis dolore dignissimos",
            messageType: "Syfte",
            inquiryTitle: "Projektförfrågan",
            messageTitle: "Meddelande",
            suggestionTitle: "Förslag",
            nameLabel: "Namn",
            emailLabel: "Mail",
            messageLabel: "Meddelande",
            send: "Skicka",
            errorMsgs: {
              [errors.INPUT_NOT_EMAIL]: " är inte giltlig.",
              [errors.INPUT_TOO_LONG]: " är för lång.",
              [errors.INPUT_TOO_SHORT]: " är för kort.",
            },
            sentMessage:
              "Tack för ditt meddelande! Lorem ipsum dicta nulla quaerat reiciendis dolore dignissimosLorem ipsum, dolor sit amet",
            confirmationMessage:
              "Lorem jaudhia hoiahsoud ohiasoiud ioasdio aiou",
            language: "swe",
          }}
        />
      </main>
      {/* <footer>
        <FooterSection />
      </footer> */}
    </>
  );
}
