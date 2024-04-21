import type { Metadata } from "next";

import { MdConstruction } from "react-icons/md";
import enFlag from "/public/uk-flag.svg";
import NavigationBar from "@/components/navigation/navigation-bar";
import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import ContactSection from "@/components/contact/contact-section";
import FooterSection from "@/components/footer/footer-section";

import * as errors from "@/error-messages";
import { Suspense } from "react";

const heading =
  "Design, utveckling och underhåll: Alla dina webbbehov på ett och samma ställe";
const subheading =
  "Personliga hemsidor designade för individer eller företag, oavsett projektets omfattning eller komplexitet. Inget projekt är för stora eller för små. Lämna dina webbrelaterade bekymmer till oss, så du kan fokusera på dina egna uppgifter. Med obegränsade revideringar och inga åtaganden förrän projektet är färdigt, skicka in en riskfri förfrågan där du beskriver dina behov.";

export const metadata: Metadata = {
  title: `Norrman.dev: ${heading}.`,
  description: subheading,
  metadataBase: new URL("https://norrman.dev"),
  alternates: {
    canonical: "https://norrman.dev",
    languages: {
      "en-GB": "/",
      "se-SV": "/se",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    images: "/twitter-image.png",
  },
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

      <main className="flex flex-col items-center justify-center">
        <HeroSection
          textContent={{
            heading: heading,
            subheading: subheading,
            buttonText: "Skicka projektförfrågan",
            scrollText: "Scrolla ned",
          }}
        />
        <Suspense>
          <div className="min-h-screen flex items-center justify-center text-4xl">
            <h1 className="flex flex-row gap-5 uppercase tracking-widest">
              <MdConstruction />
              under konstruktion!
            </h1>
          </div>
          {/*       
          <ServicesSection
            textContent={{
              heading: "Tjänster",
              introText:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum tempora sit temporibus, consequatur dicta pariatur quis minus. Voluptatibus eligendi consequatur nemo laudantium numquam ipsam facere aspernatur eos aliquam aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum tempora sit temporibus, consequatur dicta pariatur quis minus. Voluptatibus eligendi consequatur nemo laudantium numquam ipsam facere aspernatur eos aliquam aliquid.",
              servicesText: "",
              numberText: "Steg",
              sections: [
                {
                  number: 1,
                  title: "UI design",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
                  enabled: "",
                  disabled: "",
                  keywords: [],
                },
                {
                  number: 2,
                  title: "Utveckling",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
                  enabled: "",
                  disabled: "",
                  keywords: [],
                },
                {
                  number: 3,
                  title: "DevOps",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
                  enabled: "",
                  disabled: "",
                  keywords: [],
                },
                {
                  number: 4,
                  title: "Underhåll",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
                  enabled: "",
                  disabled: "",
                  keywords: [],
                },
              ],
            }}
          />
        */}
        </Suspense>
        <ContactSection
          textContent={{
            heading: "Kontakt",
            text: "Oavsett om du har en klar bild av dina behov eller osäker på vad du behöver, är vi här för att hjälpa dig! Skicka en förfrågan för en kostnadsfri tids- och kostnadsuppskattning. Du har inga inga åtaganden eller förpliktelser förrän du är helt nöjd med det slutliga produkten. Fyll i kontaktformuläret eller kontakta oss via Discord eller e-post genom att klicka på ikonerna nedan. Du kommer få ett svar inom 24 timmar efter att förfrågan har mottagits.",
            messageType: "Typ",
            inquiryTitle: "Projektförfrågan",
            messageTitle: "Meddelande",
            suggestionTitle: "Förslag",
            nameLabel: "Namn",
            emailLabel: "Mail",
            messageLabel: "Meddelande",
            send: "Skicka",
            edit: "Redigera",
            errorMsgs: {
              [errors.INPUT_NOT_EMAIL]: " är inte giltlig.",
              [errors.INPUT_TOO_LONG]: " är för lång.",
              [errors.INPUT_TOO_SHORT]: " är för kort.",
            },
            sentMessage:
              "Tack för ditt meddelande! En bekräftelse via e-post kommer att skickas till dig inom kort",
            confirmation: "Bekräftelse",
            confirmed: "skickat",
            confirmationMessage:
              "Vänligen bekräfta ditt namn, e-post och meddelande. Är du säker på att du vill skicka följande",
            language: "swe",
          }}
        />
      </main>
      <footer>
        <FooterSection
          langChangeURL="/en"
          textContent={{
            backUp: "Tillbaka till toppen",
            sourceCode: "Hemsidans källkod",
            langChange: "Engelsk",
            changeTo: "Ändra till",
            sendMail: "Skicka mail",
            connect: "Anslut",
          }}
        />
      </footer>
    </>
  );
}
