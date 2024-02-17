interface FormButtonProps {
  clickHandler: any;
  selected: boolean;
  icon: React.ReactElement;
  title: string;
}

export default function FormButton({
  clickHandler,
  selected,
  icon,
  title,
}: FormButtonProps) {
  return (
    <button
      onClick={() => clickHandler()}
      className={`${
        selected
          ? "border-orange-400 text-orange-400"
          : "dark:hover:border-slate-200 dark:hover:text-slate-200 hover:border-slate-950/40 hover:text-slate-950/40"
      } flex flex-row items-center gap-2 p-3 border-2 rounded-xl border-inherit transition-all text-xl sm:text-lg`}
    >
      {icon}
      <div className="hidden sm:block ">{title}</div>
    </button>
  );
}
