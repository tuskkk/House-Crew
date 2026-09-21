interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ text, children, className }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center min-w-16 rounded bg-primary px-4 py-3 shadow cursor-pointer hover:bg-primary-hover lg:px-5 lg: py-3.5 ${className || ""}`}
    >
      {children}
      <span className="pl-1 text-sm tracking-wide text-white">{text}</span>
    </button>
  );
}
