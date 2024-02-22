"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

enum Modes {
  LIGHT,
  DARK,
  SYSTEM,
}

interface DarkModeLinkProps {
  changeTo: string;
}

export default function DarkModeLink({ changeTo }: DarkModeLinkProps) {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(1);

  useEffect(() => {
    const mode = theme === "light" ? Modes.LIGHT : Modes.DARK;
    setMode(mode);
  }, [theme]);

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
    <div className="hover:cursor-pointer hover:underline" onClick={changeMode}>
      {changeTo} {mode == 0 && "dark"} {mode == 1 && "light"} mode
    </div>
  );
}
