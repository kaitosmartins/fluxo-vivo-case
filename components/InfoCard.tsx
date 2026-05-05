import { ReactNode } from "react";
import { Card } from "./Card";

export function InfoCard({
  title,
  text,
  icon,
  tone = "green"
}: {
  title: string;
  text: string;
  icon?: ReactNode;
  tone?: "green" | "orange" | "white";
}) {
  const toneClass = {
    green: "border-brand-light bg-green-50",
    orange: "border-brand-accentSoft bg-brand-warning",
    white: "bg-white"
  }[tone];

  return (
    <Card className={toneClass}>
      <div className="flex gap-3">
        {icon ? <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-lg shadow-sm">{icon}</div> : null}
        <div>
          <h3 className="font-black text-brand-text">{title}</h3>
          <p className="mt-1 text-sm leading-5 text-brand-muted">{text}</p>
        </div>
      </div>
    </Card>
  );
}
