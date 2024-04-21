import type { Metadata } from "next";

import seFlag from "/public/swedish-flag.svg";
import NavigationBar from "@/components/navigation/navigation-bar";
import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import ContactSection from "@/components/contact/contact-section";
import FooterSection from "@/components/footer/footer-section";

import * as errors from "@/error-messages";
import { Suspense } from "react";

const heading =
  "Design, development, and maintenance: All your web needs in one place";
const subheading =
  "Personalised websites designed for individuals or enterprises, no matter the project's scope or complexity. No project is too big or too small. Leave your web concerns to us, allowing you to focus on your primary business goals. With unlimited revisions and no commitments until the project completion—submit a risk-free inquiry detailing your needs.";

export const metadata: Metadata = {
  title: `Norrman.dev: ${heading}.`,
  description: subheading,
  metadataBase: new URL("https://norrman.dev"),
  alternates: {
    canonical: "/",
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
            heading: heading,
            subheading: subheading,
            buttonText: "Make an inquiry",
            scrollText: "Scroll down",
          }}
        />
        <Suspense>
          <ServicesSection
            textContent={{
              heading: "Services",
              introText:
                "Every website project is unique. Whether it involves building an art portfolio, designing a social network, or launching an online shop, each website presents its own set of challenges and requirements. You may already have meticulously designed every detail of your website, or possibly managing your own hosting platform, thus bypassing the need for those particular services. A tailored approach ensures that you only invest in the services you truly need, promoting transparency and eliminating any hidden costs.",
              servicesText:
                "The overall process is divided into four key steps: UI design, development, DevOps, and maintenance. These steps correspond to planning, production, launching, and upkeep respectively. To help you better understand your needs, please refer to the corresponding sections below.",
              numberText: "Step",
              sections: [
                {
                  number: 1,
                  title: "UI design",
                  text: "UI design is the initial step of the process, referring to the design of the user interface, focusing on layout, visual elements, and the interactive components that enhance the user's experience. The design choices directly impacts how users interact with and perceive the website. The design prioritises both UX and responsive design principles, ensuring high usability and accessibility across all screen sizes.",
                  enabled:
                    "Your ideas and concepts (ideally supported by links to a selection of similar websites and/or low-fidelity concept images) are translated into concrete designs with a strong emphasis on UX and usability.",
                  disabled:
                    "You are expected to provide a comprehensive website design, either in the form of a Figma (or equivalent) document or as a collection of images. The design will still be reviewed and feedback can be provided.",
                  keywords: [
                    "User Interface (UI)",
                    "User Experience (UX)",
                    "Responsive design",
                    "Mobile design",
                    "Desktop design",
                  ],
                },
                {
                  number: 2,
                  title: "Development",
                  text: "Development is the main step of the process, where the website's blueprint comes to life. It involves translating the UI design into functional code. From front-end development, focusing on the visual elements and user interaction, to back-end development, handling server-side operations, databases and authentication. Every website is developed with a strong focus on SEO, using semantic HTML and adhering to best coding practices. If any data needs to be stored, database schemas and tables are designed and developed. For larger projects, orchestration tools such as Kubernetes or Docker Swarm. along with microservice principles, can be requested.",
                  enabled:
                    "Unless requested otherwise the front-end is developed using NextJS (React), one of the currently most popular and modern JavaScript frameworks, for optimal performance and scalability, TypeScript and unit tests to mitigate errors and bugs, and linting and TailwindCSS for code consistency. If applicable, the back-end is implemented in NodeJS, with databases running PostgreSQL.",
                  disabled:
                    "You are responsible for developing the code for the entire website, including both front-end and back-end functionality. If you require DevOps or maintenance services, a fully functioning code base is expected.",
                  keywords: [
                    "Database design",
                    "PostgreSQL",
                    "MongoDB",
                    "SEO",
                    "OAuth",
                    "Semantic HTML",
                    "TypeScript",
                    "NextJS (React)",
                    "TailwindCSS",
                    "NodeJS",
                    "Linting",
                    "Testing",
                    "Front-end development",
                    "Back-end development",
                  ],
                },
                {
                  number: 3,
                  title: "DevOps",
                  text: "DevOps bridges the gap between development and IT operations, focusing on streamlining the deployment and maintenance processes. It involves setting up the infrastructure, configuring servers, and implementing automation tools to facilitate continuous integration and deployment (CI/CD). By optimising workflows and ensuring the reliability and scalability of the system, DevOps enables rapid iterations and seamless updates, ultimately enhancing the overall efficiency and stability of the website.",
                  enabled:
                    "The project is packaged into runnable Docker containers, ensuring seamless execution on any server or cloud platform. For larger projects, orchestration tools like Kubernetes or Docker Swarm are offered. Version control and code backups are managed and documented using GitHub and/or DockerHub. To access the website securely, domain linking and SSL certification for HTTS is provided with every project. Employing GitOps principles, the deployment process uses GitHub actions to guarantee that the hosted version consistently runs the latest stable iteration of the project.",
                  disabled:
                    "You are expected to handle all aspects of server setup and configuration, as well as domain linking, HTTPS configuration, and SSL certification. How the website is hosted is your decision. Without the DevOps service, the maintenance service cannot be offered.",
                  keywords: [
                    "Deployment",
                    "Infrastructure",
                    "Domain linking",
                    "HTTPS",
                    "SSL certificate",
                    "Container",
                    "Docker",
                    "Kubernetes",
                    "Docker Swarm",
                    "GitHub",
                    "GitOps",
                    "CI/CD",
                  ],
                },
                {
                  number: 4,
                  title: "Maintenance",
                  text: "Maintenance is the ongoing process of ensuring the website's functionality, security, and performance post-launch. It involves monitoring key metrics such as scalability, uptime, and redundancy to ensure uninterrupted access to the website. Regular backups of both the database and website files are essential for data protection and disaster recovery. Version control systems are utilised for efficient tracking and management of code changes. Content management is also central to my approach, facilitating seamless updates and enhancements to websites and applications.",
                  enabled:
                    "The website is continuously monitored. In cases of high traffic, the deployment is scaled up to ensure optimal performance. A close to 100% uptime is guaranteed by implementing server redundancy, ensuring uninterrupted accessibility to your website. Additionally, both database and website backups are securely stored, safeguarding against unforeseeable events and ensuring the preservation of valuable data. For ongoing content updates, dedicated content management services are offered, ensuring swift implementation of changes to keep your website current and engaging.",
                  disabled:
                    "After the website launch, you're solely responsible for hosting and maintenance tasks like upkeep, scalability management, uptime monitoring, and backups. Changes or adjustments are limited to bug fixes.",
                  keywords: [
                    "Upkeep",
                    "Scalability",
                    "Uptime",
                    "Redundancy",
                    "Backup",
                    "Version control",
                    "Content Management",
                  ],
                },
              ],
            }}
          />
          <ContactSection
            textContent={{
              heading: "Contact",
              text: "Whether you have a clear vision of your needs or you're starting from scratch, we're here to help! Send an inquiry for a free time and cost estimate. There are no commitments or obligations until you're completely satisfied with the final result. Fill out the contact form or connect with us via Discord or email by clicking on the icons below. You'll recieve a reply within 24 hours of recieving the inquiry.",
              messageType: "Type",
              inquiryTitle: "Inquiry",
              messageTitle: "Message",
              suggestionTitle: "Suggestion",
              nameLabel: "Name",
              emailLabel: "Mail",
              messageLabel: "Message",
              send: "Send",
              edit: "Edit",
              errorMsgs: {
                [errors.INPUT_NOT_EMAIL]: " is not valid.",
                [errors.INPUT_TOO_LONG]: " is too long.",
                [errors.INPUT_TOO_SHORT]: " is too short.",
              },
              sentMessage:
                "Thank you for your message! A confirmation email will be sent to you shortly",
              confirmation: "Confirmation",
              confirmed: "sent",
              confirmationMessage:
                "Please confirm your name, email, and message. Are you sure you want to send the following",
              language: "eng",
            }}
          />
        </Suspense>
      </main>
      <footer>
        <FooterSection
          langChangeURL="/se"
          textContent={{
            backUp: "Back to the top",
            sourceCode: "The source code",
            langChange: "Swedish",
            changeTo: "Change to",
            sendMail: "Send email",
            connect: "Connect",
          }}
        />
      </footer>
    </>
  );
}
