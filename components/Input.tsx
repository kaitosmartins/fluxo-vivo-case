import { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text shadow-sm outline-none transition placeholder:text-brand-muted focus:border-brand-primary focus:ring-4 focus:ring-brand-light ${className}`}
    />
  );
}
