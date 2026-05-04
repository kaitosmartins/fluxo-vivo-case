import { ReactNode } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  badge?: string;
  children?: ReactNode;
}

export function Card({ title, subtitle, badge, children }: CardProps) {
  return (
    <section className="rounded-xl border border-brand-border bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-brand-text">{title}</h3>
        {badge ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-brand-primary">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-brand-muted">{subtitle}</p>
      {children}
    </section>
  );
}
