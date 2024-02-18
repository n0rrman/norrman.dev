import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "@/components/contact/contact-form";

import * as errors from "@/error-messages";

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
    errorMsgs: {
      [errors.INPUT_NOT_EMAIL]: string;
      [errors.INPUT_TOO_LONG]: string;
      [errors.INPUT_TOO_SHORT]: string;
    };
    send: string;
    language: string;
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
    errorMsgs,
    send,
    language,
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
          errorMsgs={errorMsgs}
          send={send}
          language={language}
        />
      </div>
    </section>
  );
}
