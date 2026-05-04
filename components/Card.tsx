import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  badge?: string;
  children?: ReactNode;
}

export function Card({ title, subtitle, badge, children }: CardProps) {
  return (
    <section className="rounded-card border border-brand-border bg-white p-4 shadow-soft">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-brand-text">{title}</h2>
        {badge ? (
          <span className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-brand-muted">{subtitle}</p>
      {children ? <div className="mt-3">{children}</div> : null}
    </section>
  );
}
