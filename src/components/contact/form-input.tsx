"use client";

import React from "react";
import { useState, useEffect } from "react";

interface FormInputProps {
  title: string;
  placeholder: string;
  textarea?: boolean;
  error?: string[];
}

export default function FormInput({
  title,
  placeholder,
  textarea,
}: FormInputProps) {
  useEffect(() => {
    setValue(window.localStorage.getItem(title) || "");
  }, [title]);

  const [value, setValue] = useState("");

  const props = {
    type: "text",
    id: title,
    placeholder: placeholder,
  };

  const recordChange = (e: any) => {
    setValue(e.target.value);
    window.localStorage.setItem(title, e.target.value);
  };

  const renderedInput = () => {
    const className = `${
      !!value ? "placeholder:opacity-0" : "placeholder:opacity-100"
    } placeholder:text-slate-950/40 border-slate-950/65 dark:placeholder:text-slate-200/65 dark:border-slate-200 z-10 p-3 outline-none placeholder:uppercase placeholder:tracking-widest focus:border-orange-400 dark:focus:border-orange-400 focus:placeholder:-translate-y-[2.2rem] placeholder:opacity-100 focus:placeholder:opacity-0 placeholder:transition bg-transparent border-2 rounded-lg`;
    if (textarea) {
      return (
        <textarea
          value={value}
          name={title}
          onChange={recordChange}
          {...props}
          className={`${className} aspect-[1.5] sm:aspect-[3] resize-none peer z-10`}
        />
      );
    } else {
      return (
        <input
          name={title}
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
        className={`${
          !!value
            ? "translate-y-0 opacity-100"
            : "translate-y-[2.2rem] opacity-0"
        } peer-focus:translate-y-0 peer-focus:opacity-100 text-xs tracking-widest px-[0.85rem] z-0 transition`}
        htmlFor={title}
      >
        {title}
      </label>
    </div>
  );
}
