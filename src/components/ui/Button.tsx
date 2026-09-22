import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`min-w-16 rounded px-4 py-3 shadow lg:px-5 lg:py-3.5
       ${props.disabled ? "bg-disabled text-text-disabled cursor-not-allowed" : "bg-primary text-white cursor-pointer hover:bg-primary-hover"}`}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
};

export default Button;
