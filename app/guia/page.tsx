"use client";

import Link from "next/link";
import { BatteryCharging, Cpu, Droplets, MapPinned, Recycle, ShieldAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { disposalGuideItems } from "@/data/mockData";

const icons = [BatteryCharging, Droplets, Recycle, Cpu];
const filters = ["Todos", "Recicláveis", "Resíduos especiais", "Óleo", "Pilhas", "Eletrônicos", "Vidro"];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function matchesFilter(item: (typeof disposalGuideItems)[number], activeFilter: string) {
  if (activeFilter === "Todos") return true;

  const normalizedFilter = normalize(activeFilter);
  const searchable = normalize([item.name, item.category, ...item.aliases].join(" "));

  if (normalizedFilter === "residuos especiais") {
    return normalize(item.category) === "residuo especial";
  }

  if (normalizedFilter === "reciclaveis") {
    return normalize(item.category) === "reciclavel";
  }

  if (normalizedFilter === "pilhas") {
    return searchable.includes("pilha");
  }

  if (normalizedFilter === "eletronicos") {
    return searchable.includes("eletronico");
  }

  return searchable.includes(normalizedFilter);
}

export default function GuiaPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return disposalGuideItems.filter((item) => {
      const searchable = [
        item.name,
        item.category,
        item.prepare,
        item.where,
        item.care,
        ...item.aliases
      ].join(" ");

      const matchesQuery = !normalizedQuery || normalize(searchable).includes(normalizedQuery);
      return matchesQuery && matchesFilter(item, activeFilter);
    });
  }, [activeFilter, query]);

  return (
    <AppShell>
      <Header
        title="Guia de descarte"
        subtitle="Busque um resíduo e veja como descartar corretamente em Ilhabela."
        backHref="/"
      />

      <div className="mb-3">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ex: pilha, óleo, vidro, eletrônico..."
          aria-label="Buscar resíduo"
        />
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => {
          const active = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-3 py-2 text-xs font-bold shadow-sm transition ${
                active
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-brand-border bg-white text-brand-muted hover:border-brand-primary hover:bg-green-50"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <section className="space-y-3">
        {filtered.map((item, index) => {
          const Icon = icons[index % icons.length];
          const special = item.category === "Resíduo especial";

          return (
            <Card key={item.name}>
              <div className="flex gap-3">
                <div className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${special ? "bg-brand-warning text-brand-accent" : "bg-brand-light text-brand-dark"}`}>
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-black text-brand-text">{item.name}</h2>
                    <Badge tone={special ? "orange" : "green"}>{item.category}</Badge>
                  </div>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-brand-muted">
                    <p><strong className="text-brand-text">Como preparar:</strong> {item.prepare}</p>
                    <p><strong className="text-brand-text">Onde descartar:</strong> {item.where}</p>
                    <p className="flex items-start gap-2">
                      <ShieldAlert className="mt-1 size-4 shrink-0 text-brand-accent" />
                      <span><strong className="text-brand-text">Cuidado:</strong> {item.care}</span>
                    </p>
                  </div>
                  <Link href="/mapa" className={`mt-3 inline-flex min-h-10 items-center gap-2 rounded-2xl px-3 py-2 text-sm font-black ${special ? "bg-brand-primary text-white" : "border border-brand-border bg-white text-brand-primary"}`}>
                    <MapPinned className="size-4" />
                    {special ? "Ver pontos próximos" : "Ver coleta ou pontos"}
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
