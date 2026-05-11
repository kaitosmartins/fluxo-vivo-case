"use client";

import { CalendarDays, Home, MapPinned, Trophy, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Início", icon: Home },
  { href: "/coleta", label: "Coleta", icon: CalendarDays },
  { href: "/mapa", label: "Mapa", icon: MapPinned },
  { href: "/ranking", label: "Ranking", icon: Trophy },
  { href: "/perfil", label: "Perfil", icon: UserRound }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md border-t border-brand-border bg-white/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-nav backdrop-blur sm:bottom-8 sm:rounded-b-[2rem]">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-14 flex-col items-center justify-center rounded-2xl text-xs font-bold transition ${
                active ? "bg-brand-light text-brand-dark" : "text-brand-muted hover:bg-slate-50"
              }`}
            >
              <Icon className="size-5" strokeWidth={2.4} aria-hidden="true" />
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
