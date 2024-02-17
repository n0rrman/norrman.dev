"use client";

import { startTransition, useRef, useState } from "react";

import {
  HiOutlineTag,
  HiOutlineLightBulb,
  HiOutlineAnnotation,
} from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { useFormState, useFormStatus } from "react-dom";

import FormInput from "./form-input";
import { submitContactFormState } from "@/actions";
import FormButton from "./form-button";

const INQUIRY = "Inquiry";
const MESSAGE = "Message";
const SUGGESTION = "Suggestion";

interface ContactFormProps {
  messageType: string;
  inquiryTitle: string;
  messageTitle: string;
  suggestionTitle: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  send: string;
}

export default function ContactForm({
  messageType,
  inquiryTitle,
  messageTitle,
  suggestionTitle,
  nameLabel,
  emailLabel,
  messageLabel,
  send,
}: ContactFormProps) {
  const [selectedButton, setSelectedButton] = useState(INQUIRY);

  const formRef = useRef(null);

  const { pending } = useFormStatus();
  const [formState, action] = useFormState(submitContactFormState, {
    errors: {},
  });

  const handleButtonClick = (event: MouseEvent, buttonId: string) => {
    setSelectedButton(buttonId);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      formData.set("topic", selectedButton);

      startTransition(() => {
        action(formData);
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row backdrop-blur-xl bg-blue-950/10 dark:bg-slate-200/10 rounded-xl w-full">
      <div className="flex flex-row md:flex-col w-full md:w-72 gap-3 text-sm md:text-base lg:text-xl p-5 border-slate-900 dark:border-slate-200/65 dark:text-slate-200/65 border-b md:border-r md:border-b-0">
        <h2 className="hidden md:block text-sm -mb-2 text-slate-900 dark:text-slate-200 uppercase tracking-widest text-center">
          {messageType}
        </h2>

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
      <div className="relative w-full px-4 sm:px-7 py-5 md:p-7">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col text-xs uppercase tracking-widest gap-2"
        >
          <h2 className="text-xl py-2">
            {selectedButton == INQUIRY && inquiryTitle}
            {selectedButton == MESSAGE && messageTitle}
            {selectedButton == SUGGESTION && suggestionTitle}
            <span className="text-orange-400">.</span>
          </h2>
          <FormInput
            title={nameLabel}
            placeholder={`${nameLabel}: Alex Doe`}
            error={formState.errors.name}
          />
          <FormInput
            title={emailLabel}
            placeholder={`${emailLabel}: email@example.com`}
            error={formState.errors.email}
          />
          <FormInput
            title={messageLabel}
            placeholder={`${messageLabel}: 👋`}
            textarea
            error={formState.errors.message}
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
              disabled
              type="submit"
              className="flex flex-row items-center cursor-not-allowed justify-center px-6 py-3 border-2 border-slate-950/65 dark:border-slate-200 rounded-lg gap-1 transition-all hover:text-orange-400 dark:hover:border-orange-400 hover:border-orange-400"
            >
              <RiMailSendLine />
              <div>
                {send}{" "}
                <span className="lowercase">
                  {selectedButton == INQUIRY && inquiryTitle}
                  {selectedButton == MESSAGE && messageTitle}
                  {selectedButton == SUGGESTION && suggestionTitle}
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
