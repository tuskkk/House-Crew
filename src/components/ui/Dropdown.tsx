interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

export default function Dropdown({ children, className }: DropdownProps) {
  return (
    <div
      role="menu"
      className={`${className || ""} absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-white p-1 shadow-lg`}
    >
      {children}
    </div>
  );
}
