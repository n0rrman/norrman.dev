"use client";

import { useEffect, useState } from "react";

interface HideOnScrollProps {
  className?: string;
  threshold: number;
  children: React.ReactNode;
}

export default function HideOnScroll({
  threshold,
  className,
  children,
}: HideOnScrollProps) {
  const [hidden, setHidden] = useState(false);

  function handleScroll() {
    setHidden(window.scrollY >= threshold);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        `${
          hidden
            ? "translate-y-[2.5rem] text-transparent"
            : "translate-y-0 text-inherit"
        } transition-all duration-500 ease-in-out ` + className
      }
    >
      {children}
    </div>
  );
}
