type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Toggle = ({
  checked,
  onChange,
  label,
  disabled = false,
  children,
}: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label ?? "Toggle setting"}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-7 w-14 shrink-0 items-center
        rounded-full border border-transparent
        transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-accent
        disabled:cursor-not-allowed disabled:opacity-50
        ${checked ? "bg-primary hover:bg-primary-hover" : "bg-disabled"}
      `}
    >
      <span
        className={`
          flex h-6 w-6 items-center justify-center rounded-full
          bg-white shadow-sm
          transition-transform duration-200
          ${checked ? "translate-x-[26px]" : "translate-x-0"}
        `}
      >
        {children}
      </span>
    </button>
  );
};

export default Toggle;
