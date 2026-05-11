"use client";

import { AlertTriangle, ChevronDown, ChevronUp, Clock3, Info, MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { disposalPoints } from "@/data/mockData";

const filters = ["Todos", "Ecoponto", "Recicláveis", "Óleo", "Pilhas", "Eletrônicos", "Vidro", "Papelão", "Plástico"];

function badgeTone(category: string): "green" | "orange" {
  return category.includes("Óleo") || category.includes("Ecoponto") ? "orange" : "green";
}

export default function MapaPage() {
  const [expandedPoint, setExpandedPoint] = useState(disposalPoints[0].name);

  return (
    <AppShell>
      <Header title="Onde descartar corretamente" subtitle="Pontos simulados para levar resíduos sem jogar na rua." backHref="/" />

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter, index) => (
          <span
            key={filter}
            className={`shrink-0 rounded-full px-3 py-2 text-xs font-bold ${
              index === 0 ? "bg-brand-primary text-white" : "bg-white text-brand-muted"
            }`}
          >
            {filter}
          </span>
        ))}
      </div>

      <Card className="mb-5 overflow-hidden p-0">
        <div className="relative h-64 bg-gradient-to-br from-green-50 via-slate-100 to-orange-50">
          <div className="absolute left-8 top-10 h-40 w-1 rotate-45 rounded-full bg-white/80" />
          <div className="absolute right-14 top-6 h-52 w-1 -rotate-12 rounded-full bg-white/80" />
          <div className="absolute bottom-8 left-12 h-1 w-56 rounded-full bg-white/80" />
          {[
            "left-[18%] top-[24%] bg-brand-primary",
            "right-[22%] top-[35%] bg-brand-accent",
            "bottom-[22%] left-[45%] bg-brand-primary",
            "bottom-[34%] right-[12%] bg-brand-accent",
            "left-[30%] bottom-[16%] bg-brand-primary"
          ].map((className) => (
            <div key={className} className={`absolute flex size-9 items-center justify-center rounded-full text-white shadow-soft ${className}`}>
              <MapPin className="size-5" />
            </div>
          ))}
          <div className="absolute left-4 top-4 rounded-2xl bg-white/90 px-3 py-2 text-xs font-bold text-brand-muted shadow-sm">
            Mapa simulado de Ilhabela
          </div>
        </div>
      </Card>

      <section className="space-y-3">
        {disposalPoints.map((point) => {
          const expanded = expandedPoint === point.name;

          return (
            <Card key={point.name}>
              <button
                className="flex w-full items-start justify-between gap-3 text-left"
                onClick={() => setExpandedPoint(expanded ? "" : point.name)}
              >
                <div>
                  <h2 className="font-black text-brand-text">{point.name}</h2>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">{point.distance} · aceita {point.category}</p>
                  <div className="mt-3">
                    <Badge tone={badgeTone(point.category)}>{point.category}</Badge>
                  </div>
                </div>
                <span className="mt-1 text-brand-muted">
                  {expanded ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                </span>
              </button>

              {expanded ? (
                <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-brand-muted">
                  <p><strong className="text-brand-text">Material aceito:</strong> {point.materials}</p>
                  <p className="flex items-center gap-2">
                    <Clock3 className="size-4 text-brand-primary" />
                    <span><strong className="text-brand-text">Horário:</strong> {point.hours}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Info className="mt-1 size-4 shrink-0 text-brand-primary" />
                    <span>{point.note}</span>
                  </p>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    <Button variant="secondary" className="min-h-10 px-3 py-2 text-xs shadow-none">
                      <Navigation className="mr-1 size-4" />
                      Ver detalhes
                    </Button>
                    <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-black text-brand-accent">
                      <AlertTriangle className="size-4" />
                      Reportar problema neste ponto
                    </button>
                  </div>
                </div>
              ) : null}
            </Card>
          );
        })}
      </section>
    </AppShell>
  );
}
