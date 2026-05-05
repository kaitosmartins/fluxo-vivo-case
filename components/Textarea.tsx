import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-bold text-brand-text">{label}</span> : null}
      <textarea
        {...props}
        className={`min-h-32 w-full resize-none rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-text shadow-sm outline-none transition placeholder:text-brand-muted focus:border-brand-primary focus:ring-4 focus:ring-brand-light ${className}`}
      />
    </label>
  );
}
