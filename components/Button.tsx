import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'neutral' | 'highlight' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  block?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  neutral:
    'bg-white text-brand-text border border-brand-border hover:bg-slate-50 active:bg-slate-100',
  highlight:
    'bg-brand-accent text-white border border-brand-accent hover:brightness-95 active:brightness-90',
  primary:
    'bg-brand-primary text-white border border-brand-primary hover:bg-brand-secondary active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60',
};

export function Button({
  variant = 'neutral',
  icon,
  block = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-control px-4 py-3 text-sm font-semibold shadow-md transition ${variantClasses[variant]} ${
        block ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
