interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

export default function Dropdown({ children, className }: DropdownProps) {
  return (
    <div
      role="menu"
      className={`${className || ""} absolute right-0 top-full z-50 mt-2 w-36 rounded-lg border border-border
       bg-white p-0.5 shadow-lg lg:p-1 lg:w-48`}
    >
      {children}
    </div>
  );
}
