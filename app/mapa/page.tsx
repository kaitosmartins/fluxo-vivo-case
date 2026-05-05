"use client";

import { AlertTriangle, ChevronDown, ChevronUp, Clock3, MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";

const filters = ["Reciclaveis", "Oleo", "Eletronicos", "Pilhas", "Moveis"];

const points = [
  {
    name: "Centro de Triagem Nega Malu",
    distance: "1,2 km",
    type: "Reciclaveis",
    materials: "papel, plastico, metal e vidro limpo",
    hours: "Segunda a sexta, 8h as 17h",
    note: "Leve os residuos secos e separados por tipo."
  },
  {
    name: "Ecoponto Barra Velha",
    distance: "2,8 km",
    type: "Moveis e entulho",
    materials: "moveis pequenos, entulho ensacado e madeira",
    hours: "Terca a sabado, 9h as 16h",
    note: "Volumes grandes podem exigir agendamento previo."
  },
  {
    name: "Ponto de oleo usado",
    distance: "850 m",
    type: "Oleo",
    materials: "oleo de cozinha em garrafa PET fechada",
    hours: "Todos os dias, 9h as 18h",
    note: "Nao misture oleo com agua ou restos de alimento."
  },
  {
    name: "Coleta de eletronicos",
    distance: "3,4 km",
    type: "Eletronicos",
    materials: "cabos, celulares, carregadores e pequenos aparelhos",
    hours: "Quarta e sexta, 10h as 15h",
    note: "Remova dados pessoais antes do descarte."
  }
];

export default function MapaPage() {
  const [expandedPoint, setExpandedPoint] = useState(points[0].name);

  return (
    <AppShell>
      <Header title="Pontos de coleta" subtitle="Veja locais proximos para descarte correto em Ilhabela." backHref="/" />

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
            "bottom-[34%] right-[12%] bg-brand-accent"
          ].map((className) => (
            <div key={className} className={`absolute flex size-9 items-center justify-center rounded-full text-white shadow-soft ${className}`}>
              <MapPin className="size-5" />
            </div>
          ))}
          <div className="absolute left-4 top-4 rounded-2xl bg-white/90 px-3 py-2 text-xs font-bold text-brand-muted shadow-sm">
            Mapa simulado
          </div>
        </div>
      </Card>

      <section className="space-y-3">
        {points.map((point) => {
          const expanded = expandedPoint === point.name;

          return (
            <Card key={point.name}>
              <button
                className="flex w-full items-start justify-between gap-3 text-left"
                onClick={() => setExpandedPoint(expanded ? "" : point.name)}
              >
                <div>
                  <h2 className="font-black text-brand-text">{point.name}</h2>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">{point.distance} · aceita {point.type}</p>
                  <div className="mt-3">
                    <Badge tone={point.type.includes("Oleo") ? "orange" : "green"}>{point.type}</Badge>
                  </div>
                </div>
                <span className="mt-1 text-brand-muted">
                  {expanded ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                </span>
              </button>

              {expanded ? (
                <div className="mt-4 space-y-2 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-brand-muted">
                  <p><strong className="text-brand-text">Materiais aceitos:</strong> {point.materials}</p>
                  <p className="flex items-center gap-2">
                    <Clock3 className="size-4 text-brand-primary" />
                    <span><strong className="text-brand-text">Horario:</strong> {point.hours}</span>
                  </p>
                  <p><strong className="text-brand-text">Observacao:</strong> {point.note}</p>
                  <div className="flex flex-col gap-2 pt-2">
                    <Button variant="secondary" className="min-h-10 px-3 py-2 text-xs shadow-none">
                      <Navigation className="mr-1 size-4" />
                      Ver rota
                    </Button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-black text-brand-accent">
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
