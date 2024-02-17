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
      <div className="text-sm lg:text-lg border-b-2 w-max border-transparent dark:group-hover:border-slate-200 group-hover:border-slate-950">
        {name}
      </div>
      <div className="text-2xl lg:text-3xl flex justify-center items-center relative h-6 w-6 lg:h-7 lg:w-7 overflow-hidden rounded-full  group-hover:scale-110 transition">
        {icon}
      </div>
    </Link>
  );
}
