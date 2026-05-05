import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <section className={`rounded-3xl border border-brand-border bg-brand-card p-4 shadow-soft ${className}`}>
      {children}
    </section>
  );
}
