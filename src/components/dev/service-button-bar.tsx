"use client";

import { useEffect, useReducer } from "react";

const TOGGLE_BUTTON = "toggleButton";
const ADD_BUTTON = "addButton";

const ToggleReducer = (toggles: any, action: any) => {
  const { id } = action.payload;

  switch (action.type) {
    case ADD_BUTTON: {
      return {
        ...toggles,
        [id]: action.payload.val,
      };
    }
    case TOGGLE_BUTTON: {
      window.localStorage.setItem(id, (!toggles[id]).toString());
      return {
        ...toggles,
        [id]: !toggles[id],
      };
    }
  }
};

interface ServiceButtonBarProps {
  buttons: [name: string, image: React.ReactNode][];
}

export default function ServiceButtonBar({ buttons }: ServiceButtonBarProps) {
  const [toggles, dispatch] = useReducer(ToggleReducer, {});

  const handleClick = (val: string) => {
    dispatch({ type: TOGGLE_BUTTON, payload: { id: val } });
  };

  useEffect(() => {
    buttons.map((button) => {
      const savedVal = window.localStorage?.getItem(button[0]) || "true";
      dispatch({
        type: ADD_BUTTON,
        payload: { id: button[0], val: savedVal === "true" },
      });
    });
  }, [buttons]);

  const renderedButtonBar = buttons.map(([name, image]) => {
    return (
      <div
        onClick={() => handleClick(name)}
        key={name}
        className={`${
          toggles[name]
            ? "text-blueTo border-blueTo"
            : "text-slate-400 dark:text-slate-200 border-slate-400 dark:border-slate-200/50 dark:text-slate-200/50 dark:hover:text-slate-200 hover:text-slate-500"
        } flex flex-col justify-center items-center border  rounded-lg p-2 w-32 gap-1 group select-none hover:cursor-pointer`}
      >
        <div className="text-5xl group-hover:scale-105 transition duration-100">
          {image}
        </div>
        <div className="transition duration-100">{name}</div>
      </div>
    );
  });

  return <div className="flex flex-row gap-4 ">{renderedButtonBar}</div>;
}
