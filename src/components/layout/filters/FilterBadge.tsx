import { X } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import type { Cycle, Priority } from "../../../types/task";

interface FilterBadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: Cycle | Priority | string;
  label: string;
}

export default function FilterBadge({
  name,
  label,
  ...props
}: FilterBadgeProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-between gap-1.5 bg-accent py-1.5 pr-1 pl-2 rounded-md text-white text-sm cursor-pointer hover:bg-text-primary"
    >
      {`${label}: `}
      <span className="font-semibold">{name}</span>
      <X size={16} />
    </button>
  );
}
