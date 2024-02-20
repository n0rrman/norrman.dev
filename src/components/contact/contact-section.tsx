import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "@/components/contact/contact-form";

import * as errors from "@/error-messages";
import { Suspense } from "react";

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
    sentMessage: string;
    confirmationMessage: string;
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
    sentMessage,
    confirmationMessage,
    language,
  },
}: ContactSectionProps) {
  return (
    <section className="w-full flex justify-center">
      <div className="space-y-4 container max-w-[65rem] mx-8 md:mx-16">
        <h1
          id="contact"
          className="text-2xl md:text-3xl tracking-widest uppercase flex flex-row items-center gap-8"
        >
          <MdOutlineEmail className="text-orange-400" />
          <div className="animate-flyIn">
            {heading}
            <span className="text-orange-400 ">.</span>
          </div>
        </h1>
        <p className="text-sm md:text-base">{text}</p>

        <div className="py-10">
          <Suspense>
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
              sentMessage={sentMessage}
              confirmationMessage={confirmationMessage}
              language={language}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
