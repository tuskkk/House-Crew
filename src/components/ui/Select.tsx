import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
  error?: string;
};

const Select = ({
  label,
  options,
  error,
  id,
  className = "",
  ...props
}: SelectProps) => {
  const selectId = id || props.name;

  return (
    <div className="flex w-full flex-col gap-2 cursor-pointer">
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-text-primary"
      >
        {label}
      </label>
      <div className="relative w-full">
        <select
          id={selectId}
          className={`h-12 w-full appearance-none border border-disabled bg-white px-2 text-sm text-text-primary outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-disabled md:px-4 ${error ? "border-overdue" : ""} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={20}
          strokeWidth={2}
          className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-text-primary md:right-4"
          aria-hidden="true"
        />
      </div>
      {error && <span className="w-full text-xs text-overdue">{error}</span>}
    </div>
  );
};

export default Select;
