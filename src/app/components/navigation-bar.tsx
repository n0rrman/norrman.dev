"use client";

import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setSticky(window.scrollY >= 40);
  };

  return (
    <nav
      className={`${
        sticky
          ? "fixed w-[40rem] top-2 rounded-[3rem] group shadow-xl h-16"
          : "absolute top-0 w-full h-20"
      } flex flex-col items-center justify-center backdrop-blur-md bg-slate-200/60 dark:bg-slate-200/10 z-50 ease-in-out transition-all duration-200`}
      // hover:scale-x-[102%] hover:scale-y-[105%]
    >
      navbar
    </nav>
  );
}
