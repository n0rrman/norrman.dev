"use client";

import React from "react";
import { useState, useEffect } from "react";

import * as error from "@/error-messages";

interface FormInputProps {
  id: string;
  title: string;
  placeholder: string;
  textarea?: boolean;
  errorMsgs: {
    [error.INPUT_NOT_EMAIL]: string;
    [error.INPUT_TOO_LONG]: string;
    [error.INPUT_TOO_SHORT]: string;
  };
  errors: string[] | undefined;
}

export default function FormInput({
  id,
  title,
  placeholder,
  textarea,
  errors,
  errorMsgs,
}: FormInputProps) {
  useEffect(() => {
    setValue(window.localStorage.getItem(id) || "");
  }, [id]);

  const [value, setValue] = useState("");

  const props = {
    type: "text",
    placeholder: placeholder,
  };

  const recordChange = (e: any) => {
    setValue(e.target.value);
    window.localStorage.setItem(id, e.target.value);
  };

  const renderedInput = () => {
    const className = `
    ${
      !!errors
        ? "placeholder:text-red-600/40 border-red-600/65 dark:placeholder:text-red-500/40 dark:placeholder:text-red-500/65 dark:border-red-500"
        : "placeholder:text-slate-950/40 border-slate-950/65 dark:placeholder:text-slate-200/65 dark:placeholder:text-slate-200/65 dark:border-slate-200"
    }
    ${
      !!value ? "placeholder:opacity-0" : "placeholder:opacity-100"
    } z-10 p-3 outline-none placeholder:uppercase placeholder:tracking-widest focus:border-orange-400 dark:focus:border-orange-400 focus:placeholder:-translate-y-[2.2rem] placeholder:opacity-100 focus:placeholder:opacity-0 placeholder:transition bg-transparent border-2 rounded-lg`;
    if (textarea) {
      return (
        <textarea
          value={value}
          name={id}
          onChange={recordChange}
          {...props}
          className={`${className} aspect-[1.5] sm:aspect-[3] resize-none peer z-10`}
        />
      );
    } else {
      return (
        <input
          name={id}
          onChange={recordChange}
          value={value}
          {...props}
          className={`${className} peer`}
        />
      );
    }
  };

  return (
    <div className="group flex flex-col-reverse text-xs">
      {renderedInput()}
      <label
        className={`
        ${!!errors && "text-red-600"}
        ${
          !!value || !!errors
            ? "translate-y-0 opacity-100"
            : "translate-y-[2.2rem] opacity-0"
        } peer-focus:translate-y-0 peer-focus:opacity-100 text-xs tracking-widest px-[0.85rem] z-0 transition`}
        htmlFor={title}
      >
        {title}
        {errors && (
          <span className="text-[0.6rem]">
            {errors[0] === error.INPUT_NOT_EMAIL && errorMsgs[errors[0]]}
            {errors[0] === error.INPUT_TOO_LONG && errorMsgs[errors[0]]}
            {errors[0] === error.INPUT_TOO_SHORT && errorMsgs[errors[0]]}
          </span>
        )}
      </label>
    </div>
  );
}
