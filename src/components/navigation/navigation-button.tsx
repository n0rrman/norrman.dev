import Link from "next/link";

interface NavigationButtonProps {
  name: string;
  icon: React.ReactNode;
  stickyMode: boolean;
  to: string;
  className: string;
}

export default function NavigationButton({
  name,
  icon,
  stickyMode,
  to,
  className,
}: NavigationButtonProps) {
  return (
    <Link
      href={to}
      className={`${
        stickyMode
          ? "flex-col text-3xl"
          : "flex-row gap-2 lg:gap-3 text-2xl lg:text-4xl"
      } flex justify-center items-center group`}
    >
      <div
        className={`${
          stickyMode ? "block" : "hidden"
        } ${className} transition group-hover:scale-105`}
      >
        {icon}
      </div>
      <div
        className={`${
          stickyMode ? "text-xs" : "text-xl lg:text-2xl"
        } border-b-2 border-transparent dark:group-hover:border-slate-200 group-hover:border-slate-950 transition`}
      >
        {name}
      </div>
    </Link>
  );
}
