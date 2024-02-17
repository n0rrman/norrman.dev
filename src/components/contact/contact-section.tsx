import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "@/components/contact/contact-form";

interface ContactSectionProps {
  textContent: {
    heading: string;
    text: string;
    messageType: string;
    inquiryTitle: string;
    messageTitle: string;
    suggestionTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    send: string;
  };
}

export default function ContactSection({
  textContent: {
    heading,
    text,
    messageType,
    inquiryTitle,
    messageTitle,
    suggestionTitle,
    nameLabel,
    emailLabel,
    messageLabel,
    send,
  },
}: ContactSectionProps) {
  return (
    <section className="flex flex-col min-h-screen gap-8 py-32 px-8 md:px-20 ">
      <h1
        id="contact"
        className="text-2xl md:text-3xl tracking-widest uppercase flex flex-row items-center gap-8"
      >
        <MdOutlineEmail className="text-orange-400" />
        <div>
          {heading}
          <span className="text-orange-400 ">.</span>
        </div>
      </h1>
      <p className="text-sm md:text-base">{text}</p>

      <div className="flex justify-center items-center w-full lg:w-[60rem] mx-auto my-8 md:my-16">
        <ContactForm
          messageType={messageType}
          inquiryTitle={inquiryTitle}
          messageTitle={messageTitle}
          suggestionTitle={suggestionTitle}
          nameLabel={nameLabel}
          emailLabel={emailLabel}
          messageLabel={messageLabel}
          send={send}
        />
      </div>
    </section>
  );
}
