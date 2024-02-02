import { useState, useEffect, useRef } from "react";

import { RxDividerHorizontal } from "react-icons/rx";

interface HamburgerMenuProps {
  children: React.ReactNode;
}

export default function HamburgerMenu({ children }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;

    function test(event: any) {
      if (!ref.current) {
        return;
      }

      setOpen((ref.current as HTMLElement).contains(event.target));
    }

    window.addEventListener("click", test);

    return () => window.removeEventListener("click", test);
  }, [open]);

  const handleClick = (event: any) => {
    setOpen(!open);
  };

  return (
    <div
      onClick={handleClick}
      className="h-full aspect-square flex justify-center items-center  rounded-full  border-2 hover:cursor-pointer"
      ref={ref}
    >
      <div className="flex group flex-col items-center text-4xl ">
        <div
          className={`${
            open
              ? "group-hover:scale-125 rotate-45 translate-y-2"
              : "group-hover:-mb-6 rotate-0 translate-y-0"
          } -mb-7 transition-all`}
        >
          <RxDividerHorizontal />
        </div>
        <div
          className={`${
            open ? "translate-x-5 opacity-0" : "translate-x-0 opacity-100"
          } transition-all`}
        >
          <RxDividerHorizontal />
        </div>
        <div
          className={`${
            open
              ? "group-hover:scale-125 -rotate-45 -translate-y-2"
              : "group-hover:-mt-6 rotate-0 translate-y-0"
          } -mt-7 transition-all`}
        >
          <RxDividerHorizontal />
        </div>
      </div>

      <div
        className={`${
          open
            ? "opacity-100 scale-100 translate-y-[6.25rem] -translate-x-6"
            : "opacity-0 scale-0 translate-y-0"
        } absolute h-auto w-auto shadow-xl backdrop-blur-lg z-50 ease-in-out transition-all duration-200 bg-slate-200/75 dark:bg-slate-950/50 p-3 rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
}
