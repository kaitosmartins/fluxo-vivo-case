"use client";

import Link from "next/link";
import { BatteryCharging, BookOpen, Cpu, Droplets, Leaf, Megaphone, Recycle, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { educationTips } from "@/data/mockData";

const icons = [Recycle, Leaf, Trash2, Droplets, BatteryCharging, Megaphone, Cpu, BookOpen];

export default function GuiaPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return educationTips;
    return educationTips.filter((item) => `${item.title} ${item.tag} ${item.text}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <AppShell>
      <Header title="Aprender a separar" subtitle="Dicas rápidas para descartar melhor no dia a dia." backHref="/" />

      <div className="mb-5">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar dica ou material"
          aria-label="Buscar dica ou material"
        />
      </div>

      <section className="space-y-3">
        {filtered.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card key={item.title}>
              <div className="flex gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-black text-brand-text">{item.title}</h2>
                    <Badge tone={item.tag === "Atenção" || item.tag === "Óleo" ? "orange" : "green"}>{item.tag}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{item.text}</p>
                  <Link href="/mapa" className="mt-3 inline-flex text-sm font-black text-brand-primary">
                    Ver ponto de descarte
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </section>
    </AppShell>
  );
}
