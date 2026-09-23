import type { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

interface TaskButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  name: string;
}

export default function TasksButton({
  children,
  name,
  ...props
}: TaskButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className="w-full flex items-center justify-between shadow-sm px-2 py-3 mb-6 cursor-pointer"
    >
      {name}
      {children}
      <ArrowRight
        size={20}
        color="#1e1e24"
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}
