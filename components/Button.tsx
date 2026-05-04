import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const stylesByVariant: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-secondary active:scale-[0.99] disabled:bg-brand-border",
  secondary:
    "bg-white text-brand-text border border-brand-border hover:bg-slate-50 active:scale-[0.99]",
  accent:
    "bg-brand-accent text-white hover:brightness-95 active:scale-[0.99]"
};

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-4 py-3 text-sm font-semibold shadow-md transition-all disabled:cursor-not-allowed ${stylesByVariant[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    />
  );
}
