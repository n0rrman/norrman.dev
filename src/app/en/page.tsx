import type { Metadata } from "next";

import seFlag from "/public/swedish-flag.svg";
import NavigationBar from "@/components/navigation/navigation-bar";
import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import ContactSection from "@/components/contact/contact-section";
import FooterSection from "@/components/footer/footer-section";

import * as errors from "@/error-messages";

export const metadata: Metadata = {
  title: "Norrman: ENG",
  description: "Hello, world!",
};

export default function Home() {
  return (
    <>
      <header>
        <NavigationBar
          textContent={{
            home: "Home",
            services: "Services",
            contact: "Contact",
            lang: "Svenska",
            github: "Source Code",
          }}
          langTo="/se/"
          langIcon={seFlag}
        />
      </header>
      <main className="flex flex-col items-center justify-center">
        <HeroSection
          textContent={{
            heading: "Hello, world! This is a heading",
            subheading:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores voluptates nobis ab assumenda error autem deserunt, laudantium explicabo quaerat",
            buttonText: "A button",
            scrollText: "Scroll down",
          }}
        />
        <ServicesSection
          textContent={{
            heading: "Services",
            introText:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum tempora sit temporibus, consequatur dicta pariatur quis minus. Voluptatibus eligendi consequatur nemo laudantium numquam ipsam facere aspernatur eos aliquam aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel laborum tempora sit temporibus, consequatur dicta pariatur quis minus. Voluptatibus eligendi consequatur nemo laudantium numquam ipsam facere aspernatur eos aliquam aliquid.",
            numberText: "Step",
            sections: [
              {
                number: 1,
                title: "UI design",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
              {
                number: 2,
                title: "Development",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
              {
                number: 3,
                title: "DevOps",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
              {
                number: 4,
                title: "Maintenance",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo eius voluptatibus nulla temporibus reiciendis, laudantium sint, quia laboriosam commodi vel? Quasi repellat magni, temporibus hic voluptates perferendis voluptas itaque.",
              },
            ],
          }}
        />
        <ContactSection
          textContent={{
            heading: "Contact",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dicta nulla quaerat reiciendis dolore dignissimosLorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dicta nulla quaerat reiciendis dolore dignissimos",
            messageType: "Topic",
            inquiryTitle: "Inquiry",
            messageTitle: "Message",
            suggestionTitle: "Suggestion",
            nameLabel: "Name",
            emailLabel: "Mail",
            messageLabel: "Message",
            send: "Send",
            errorMsgs: {
              [errors.INPUT_NOT_EMAIL]: " is not a valid.",
              [errors.INPUT_TOO_LONG]: " is too long.",
              [errors.INPUT_TOO_SHORT]: " is too short.",
            },
            sentMessage: "Thank you for your message, lorem ipsum lorem ipsum!",
            confirmationMessage:
              "Lorem jaudhia hoiahsoud ohiasoiud ioasdio aiou",
            language: "eng",
          }}
        />
      </main>
      {/* <footer>
        <FooterSection />
      </footer> */}
    </>
  );
}
