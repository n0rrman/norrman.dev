"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { BsMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

enum Modes {
  LIGHT,
  DARK,
  SYSTEM,
}

export default function DarkModeToggle() {
  const [mode, setMode] = useState(1);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const mode = theme === "light" ? Modes.LIGHT : Modes.DARK;
    setMode(mode);
  }),
    [];

  const changeMode = () => {
    switch (mode) {
      case Modes.DARK:
        setMode(0);
        setTheme("light");
        break;
      case Modes.LIGHT:
        setMode(1);
        setTheme("dark");
        break;
      case Modes.SYSTEM:
        setMode(1);
        setTheme("dark");
        break;
    }
  };

  return (
    <div
      onClick={changeMode}
      className="flex justify-center items-center gap-2 group"
    >
      <div className="text-sm lg:text-lg border-b-2 w-9 lg:w-11 border-transparent dark:group-hover:border-slate-200 group-hover:border-slate-950">
        {mode == 0 && "Dark"}
        {mode == 1 && "Light"}
      </div>
      <div className="text-3xl flex justify-center text-amber-400 items-center overflow-hidden relative h-6 w-6 lg:h-7 lg:w-7 bg-slate-600/75 rounded-full group-hover:scale-110 transition">
        <div className="text-lg">
          {mode == 0 && <BsMoonStarsFill />}
          {mode == 1 && <IoMdSunny className="text-2xl" />}
        </div>
      </div>
    </div>
  );
}
