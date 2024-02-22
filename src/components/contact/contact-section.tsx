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
    edit: string;
    sentMessage: string;
    confirmed: string;
    confirmation: string;
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
    edit,
    sentMessage,
    confirmation,
    confirmed,
    confirmationMessage,
    language,
  },
}: ContactSectionProps) {
  return (
    <section id="contact" className="w-full flex justify-center">
      <div className="space-y-4 container max-w-[65rem] mx-5 xs:mx-8 md:mx-16">
        <h1 className="text-2xl md:text-3xl tracking-widest uppercase flex flex-row items-center gap-8">
          <MdOutlineEmail className="text-orange-400" />
          <div className="animate-flyIn">
            {heading}
            <span className="text-orange-400 ">.</span>
          </div>
        </h1>
        <p className="text-sm md:text-base">{text}</p>

        <div className="py-10 -mx-5 xs:mx-0">
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
              edit={edit}
              sentMessage={sentMessage}
              confirmation={confirmation}
              confirmed={confirmed}
              confirmationMessage={confirmationMessage}
              language={language}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
