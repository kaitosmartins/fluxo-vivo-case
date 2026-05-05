import Link from "next/link";
import { ReactNode } from "react";

export function ActionCard({
  href,
  title,
  text,
  icon,
  featured = false
}: {
  href: string;
  title: string;
  text?: string;
  icon: ReactNode;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex min-h-28 flex-col justify-between rounded-3xl border p-4 shadow-soft transition active:scale-[0.99] ${
        featured
          ? "border-brand-primary bg-brand-primary text-white"
          : "border-brand-border bg-white text-brand-text hover:border-brand-primary"
      }`}
    >
      <span className={`flex size-10 items-center justify-center rounded-2xl text-lg ${featured ? "bg-white/20" : "bg-brand-light"}`}>
        {icon}
      </span>
      <span>
        <strong className="block text-sm font-black">{title}</strong>
        {text ? <span className={`mt-1 block text-xs leading-4 ${featured ? "text-white/85" : "text-brand-muted"}`}>{text}</span> : null}
      </span>
    </Link>
  );
}
