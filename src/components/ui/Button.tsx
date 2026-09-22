import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  version?: "primary" | "secondary";
}

const Button = ({ children, version = "primary", ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={`${props.className || ""} min-w-20 rounded px-4 py-3 shadow lg:px-5 lg:py-3.5
        ${props.disabled ? "bg-disabled text-text-disabled cursor-not-allowed" : "text-white cursor-pointer"} 
        ${version === "primary" && !props.disabled && "bg-primary hover:bg-primary-hover"} 
        ${version === "secondary" && !props.disabled && "bg-accent hover:bg-text-primary-hover"}
      `}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
};

export default Button;
