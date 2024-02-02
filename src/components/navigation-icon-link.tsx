import Link from "next/link";

interface NavigationIconLinkProps {
  to: string;
  name: string;
  icon: React.ReactElement;
}

export default function NavigationIconLink({
  to,
  name,
  icon,
}: NavigationIconLinkProps) {
  return (
    <Link href={to} className="flex justify-center items-center gap-2 group">
      <div className="text-sm lg:text-lg border-b-2 border-transparent dark:group-hover:border-slate-200 group-hover:border-slate-950">
        {name}
      </div>
      <div className="text-2xl lg:text-3xl flex justify-center items-center relative h-6 w-6 lg:h-7 lg:w-7 overflow-hidden rounded-full  group-hover:scale-110 transition">
        {icon}
      </div>
    </Link>
  );
}
