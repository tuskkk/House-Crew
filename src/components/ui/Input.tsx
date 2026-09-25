import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = ({ label, error, id, className = "", ...props }: InputProps) => {
  const inputId = id || props.name;

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-text-primary"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`h-13 w-full border border-disabled bg-white px-4 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-disabled ${error ? "border-overdue" : ""} ${className}`}
        {...props}
      />
      {error && <span className="w-full text-xs text-overdue">{error}</span>}
    </div>
  );
};

export default Input;
