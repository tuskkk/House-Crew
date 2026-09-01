interface DropdownProps {
  children: React.ReactNode;
}

export default function Dropdown({ children }: DropdownProps) {
  return (
    <div
      role="menu"
      className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-background p-1 shadow-lg"
    >
      {children}
    </div>
  );
}
