import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
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
    <section className="w-full flex justify-center">
      <div id="contact" className="-mt-24" />
      <div className="space-y-4 container max-w-[60rem] mx-5 xs:mx-8 md:mx-16">
        <h1 className="text-2xl md:text-3xl tracking-widest uppercase flex flex-row items-center gap-8">
          <MdOutlineEmail className="text-orange-400" />
          <div>
            {heading}
            <span className="text-orange-400 ">.</span>
          </div>
        </h1>
        <p className="text-sm md:text-base max-w-[75ch]">{text}</p>

        <div className="mt-auto ml-auto flex flex-row gap-3 dark:border-slate-200/65 border-slate-950/40">
          <Link
            href="mailto:email@henriknorrman.com"
            className="hover:text-orange-400 hover:border-orange-400 flex flex-row items-center gap-2 p-3 border-2 rounded-full border-inherit transition-all"
          >
            <MdAlternateEmail className="text-xl" />
          </Link>
          <Link
            href="https://discordapp.com/users/235864356980523009"
            className="hover:text-orange-400 hover:border-orange-400 flex flex-row items-center gap-2 p-3 border-2 rounded-full border-inherit transition-all"
          >
            <FaDiscord className="text-xl" />
          </Link>
        </div>

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
