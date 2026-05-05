import { ReactNode } from "react";

type BadgeTone = "green" | "orange" | "gray";

const toneClass: Record<BadgeTone, string> = {
  green: "bg-brand-light text-brand-dark",
  orange: "bg-brand-accentSoft text-orange-800",
  gray: "bg-slate-100 text-brand-muted"
};

export function Badge({
  children,
  tone = "green"
}: {
  children: ReactNode;
  tone?: BadgeTone;
}) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${toneClass[tone]}`}>
      {children}
    </span>
  );
}
