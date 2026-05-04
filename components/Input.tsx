import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted shadow-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-green-100 ${props.className ?? ""}`}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-28 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted shadow-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-green-100 ${props.className ?? ""}`}
    />
  );
}
