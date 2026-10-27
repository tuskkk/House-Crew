type CountBadgeProps = {
  count: number;
  label?: string;
  className?: string;
};

export const CountBadge = ({ count, label, className }: CountBadgeProps) => {
  if (count === undefined) return null;

  return (
    <div
      className={`${className ?? ""} flex items-center justify-center bg-secondary rounded-full
       w-4.5 h-4.5 text-accent text-xs font-extrabold`}
      aria-label={`${count} ${label ?? "elements"}`}
    >
      {count}
    </div>
  );
};
