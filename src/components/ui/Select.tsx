import type { SelectHTMLAttributes } from "react";

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
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-text-primary"
      >
        {label}
      </label>
      <select
        id={selectId}
        className={`h-12 w-full border border-disabled bg-white px-4 text-sm text-text-primary outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-disabled ${error ? "border-overdue" : ""} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="w-full text-xs text-overdue">{error}</span>}
    </div>
  );
};

export default Select;
