"use client";

import Link from "next/link";
import { BatteryCharging, Boxes, Cpu, Droplets, FileText, Recycle, Wine } from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";

const materials = [
  { name: "Pilhas e baterias", tag: "Especial", icon: BatteryCharging, text: "Guarde em local seco e leve para pontos de entrega próprios." },
  { name: "Óleo de cozinha", tag: "Óleo", icon: Droplets, text: "Armazene em garrafa PET fechada. Não jogue na pia." },
  { name: "Eletrônicos", tag: "E-lixo", icon: Cpu, text: "Celulares, cabos e pequenos aparelhos precisam de coleta específica." },
  { name: "Vidro", tag: "Reciclável", icon: Wine, text: "Separe limpo e, se estiver quebrado, embale com segurança." },
  { name: "Papel e papelão", tag: "Reciclável", icon: FileText, text: "Devem estar secos e sem excesso de gordura." },
  { name: "Plástico", tag: "Reciclável", icon: Recycle, text: "Lave embalagens e retire restos de alimento." },
  { name: "Móveis e entulho", tag: "Agendar", icon: Boxes, text: "Não descarte na rua. Confira dias e canais de coleta." }
];

export default function GuiaPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return materials;
    return materials.filter((item) => `${item.name} ${item.tag}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <AppShell hideBottomNav>
      <Header title="Guia de descarte" subtitle="Encontre rapidamente o destino correto para cada material." backHref="/" />

      <div className="mb-5">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar material"
          aria-label="Buscar material"
        />
      </div>

      <section className="space-y-3">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.name}>
              <div className="flex gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-black text-brand-text">{item.name}</h2>
                    <Badge tone={item.tag === "Agendar" ? "orange" : "green"}>{item.tag}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{item.text}</p>
                  <Link href="/mapa" className="mt-3 inline-flex text-sm font-black text-brand-primary">
                    Ver onde descartar
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
