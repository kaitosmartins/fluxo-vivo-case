import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-control border border-brand-border bg-white px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20"
      {...props}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="min-h-28 w-full rounded-control border border-brand-border bg-white px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20"
      {...props}
    />
  );
}
