"use client";

import { startTransition, useRef, useState } from "react";

import {
  HiOutlineTag,
  HiOutlineLightBulb,
  HiOutlineAnnotation,
} from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { useFormState, useFormStatus } from "react-dom";

import { submitContactFormState } from "@/actions";
import FormInput from "@/components/contact/form-input";
import FormButton from "@/components/contact/form-button";

const INQUIRY = "Inquiry";
const MESSAGE = "Message";
const SUGGESTION = "Suggestion";

import * as errors from "@/error-messages";
import Modal from "./contact-modal";

interface ContactFormProps {
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
}

export default function ContactForm({
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
}: ContactFormProps) {
  const [selectedButton, setSelectedButton] = useState(INQUIRY);
  const [modal, setModal] = useState(false);
  const [sent, setSent] = useState(false);

  const [topic, setTopic] = useState(inquiryTitle);

  const formRef = useRef(null);
  const [formState, action] = useFormState(submitContactFormState, {
    errors: {},
  });

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleButtonClick = (event: MouseEvent, buttonId: string) => {
    setSelectedButton(buttonId);
    if (buttonId === INQUIRY) {
      setTopic(inquiryTitle);
    }
    if (buttonId === SUGGESTION) {
      setTopic(suggestionTitle);
    }
    if (buttonId === MESSAGE) {
      setTopic(messageTitle);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      formData.set("topic", topic);
      formData.set("language", language);

      if (!modal || !formState.success) {
        formData.set("submit", "false");

        startTransition(() => {
          action(formData);
        });

        setModal(true);
      } else {
        formData.set("submit", "true");

        startTransition(() => {
          action(formData);
        });

        window.localStorage.removeItem("name");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("message");

        setSent(true);
      }
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row backdrop-blur-xl bg-blue-950/10 dark:bg-slate-200/10 rounded-xl w-full overflow-hidden">
      <div className="flex flex-row md:flex-col w-full md:w-72 gap-3 text-sm md:text-base lg:text-xl p-5 border-slate-900 dark:border-slate-200/65 dark:text-slate-200/65 border-b md:border-r md:border-b-0">
        <FormButton
          clickHandler={(event: MouseEvent) =>
            handleButtonClick(event, INQUIRY)
          }
          selected={selectedButton === INQUIRY}
          icon={<HiOutlineTag />}
          title={inquiryTitle}
        />
        <FormButton
          clickHandler={(event: MouseEvent) =>
            handleButtonClick(event, MESSAGE)
          }
          selected={selectedButton === MESSAGE}
          icon={<HiOutlineAnnotation />}
          title={messageTitle}
        />
        <FormButton
          clickHandler={(event: MouseEvent) =>
            handleButtonClick(event, SUGGESTION)
          }
          selected={selectedButton === SUGGESTION}
          icon={<HiOutlineLightBulb />}
          title={suggestionTitle}
        />
      </div>
      <div className="w-full px-4 sm:px-7 py-5 md:p-7">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col text-xs uppercase tracking-widest gap-2"
        >
          <h2 className="text-xl py-2">
            {topic}
            <span className="text-orange-400">.</span>
          </h2>
          <FormInput
            id="name"
            title={nameLabel}
            placeholder={`${nameLabel}: Alex Doe`}
            errors={formState?.errors.name}
            errorMsgs={errorMsgs}
          />
          <FormInput
            id="email"
            title={emailLabel}
            placeholder={`${emailLabel}: email@example.com`}
            errors={formState?.errors.email}
            errorMsgs={errorMsgs}
          />
          <FormInput
            id="message"
            title={messageLabel}
            placeholder={`${messageLabel}: 👋`}
            textarea
            errors={formState?.errors.message}
            errorMsgs={errorMsgs}
          />

          <div className="flex flex-row justify-end text-sm">
            {/* 
            // DO NOT DELETE
            
            <div className="flex flex-row justify-center items-center gap-2">
              <input
                id="include"
                type="checkbox"
                className="accent-orange-400 w-5 h-5"
              />
              <label htmlFor="include">Include selected services </label>
            </div>
            
            // DO NOT DELETE
            */}
            <button
              id="form-button"
              aria-label="submit form"
              type="submit"
              className="flex flex-row items-center justify-center px-6 py-3 border-2 border-slate-950/65 dark:border-slate-200 rounded-lg gap-1 transition-all hover:text-orange-400 dark:hover:border-orange-400 hover:border-orange-400"
            >
              <RiMailSendLine />
              <div>
                {send} <span className="lowercase">{topic}</span>
              </div>
            </button>
          </div>

          {formState.success && modal && (
            <Modal
              sent={sent}
              topic={topic}
              hideModal={() => {
                setModal(false);
              }}
              textContent={{ sentMessage, confirmationMessage }}
            />
          )}
        </form>
      </div>
    </div>
  );
}
