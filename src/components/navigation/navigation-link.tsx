import Link from "next/link";

interface NavigationIconLinkProps {
  name: string;
  icon: React.ReactElement;
  to: string;
}

export default function NavigationIconLink({
  name,
  icon,
  to,
}: NavigationIconLinkProps) {
  return (
    <Link
      href={to}
      className="flex justify-center items-center gap-2 group text-right"
    >
      <div className="text-base lg:text-lg border-b lg:border-b-2 w-max border-transparent dark:group-hover:border-slate-200 group-hover:border-slate-950">
        {name}
      </div>
      <div className="text-lg lg:text-xl flex justify-center items-center relative h-4 w-4 lg:h-5 lg:w-5 overflow-hidden rounded-full  group-hover:scale-110 transition">
        {icon}
      </div>
    </Link>
  );
}
