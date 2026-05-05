import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
}

const stylesByVariant: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white hover:bg-brand-dark disabled:bg-brand-border disabled:text-brand-muted",
  secondary: "border border-brand-border bg-white text-brand-text hover:bg-slate-50",
  accent: "bg-brand-accent text-white hover:brightness-95",
  ghost: "bg-transparent text-brand-muted hover:bg-slate-100"
};

export function getButtonClass({
  variant = "primary",
  fullWidth = false,
  className = ""
}: {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
}) {
  return [
    "inline-flex min-h-12 items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-bold shadow-sm transition",
    "focus:outline-none focus:ring-2 focus:ring-brand-primary/30 active:scale-[0.99] disabled:cursor-not-allowed",
    stylesByVariant[variant],
    fullWidth ? "w-full" : "",
    className
  ].join(" ");
}

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={getButtonClass({ variant, fullWidth, className })} {...props}>
      {children}
    </button>
  );
}
