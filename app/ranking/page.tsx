"use client";

import { useState } from "react";
import { CircleHelp, Leaf, Megaphone, Recycle, School, ShieldCheck, Trophy } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";

const bairros = [
  { name: "Centro", points: 2450, progress: 92 },
  { name: "Barra Velha", points: 2120, progress: 78 },
  { name: "Itaguassu", points: 1840, progress: 64 },
  { name: "Zona Sul", points: 1510, progress: 52 }
];

const escolas = [
  { name: "Escola Municipal 1", points: 1320, progress: 82 },
  { name: "Escola Municipal 2", points: 1180, progress: 70 },
  { name: "Escola Municipal 3", points: 930, progress: 58 }
];

export default function RankingPage() {
  const [tab, setTab] = useState<"bairros" | "escolas">("bairros");
  const data = tab === "bairros" ? bairros : escolas;

  return (
    <AppShell>
      <Header title="Ranking sustentavel" subtitle="Pontos por participacao, reciclagem e acoes ambientais." backHref="/" />

      <div className="mb-5 grid grid-cols-2 rounded-2xl bg-white p-1 shadow-sm">
        <button
          className={`rounded-xl px-4 py-3 text-sm font-black ${tab === "bairros" ? "bg-brand-primary text-white" : "text-brand-muted"}`}
          onClick={() => setTab("bairros")}
        >
          Bairros
        </button>
        <button
          className={`rounded-xl px-4 py-3 text-sm font-black ${tab === "escolas" ? "bg-brand-primary text-white" : "text-brand-muted"}`}
          onClick={() => setTab("escolas")}
        >
          Escolas
        </button>
      </div>

      {tab === "escolas" ? (
        <Card className="mb-4 border-brand-accentSoft bg-brand-warning">
          <div className="flex gap-3">
            <School className="mt-1 size-5 shrink-0 text-brand-accent" />
            <p className="text-sm leading-6 text-brand-muted">
              Ranking de escolas e uma funcionalidade futura para gincanas ecologicas municipais.
            </p>
          </div>
        </Card>
      ) : null}

      <section className="space-y-3">
        {data.map((item) => (
          <Card key={item.name}>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-accentSoft text-orange-900">
                <Trophy className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="truncate font-black text-brand-text">{item.name}</h2>
                  <span className="text-sm font-black text-brand-accent">{item.points} pts</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand-accent" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <div className="mt-5">
        <Card className="mb-4 border-brand-accentSoft bg-white">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-accentSoft text-brand-accent">
              <CircleHelp className="size-5" />
            </span>
            <h2 className="font-black text-brand-text">Como ganhar pontos?</h2>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-brand-muted">
            <li className="flex gap-2"><Recycle className="mt-1 size-4 shrink-0 text-brand-primary" />Registrar descarte correto em ponto de coleta</li>
            <li className="flex gap-2"><Megaphone className="mt-1 size-4 shrink-0 text-brand-primary" />Enviar denuncia validada pela equipe responsavel</li>
            <li className="flex gap-2"><Leaf className="mt-1 size-4 shrink-0 text-brand-primary" />Participar de acoes ambientais no bairro</li>
            <li className="flex gap-2"><School className="mt-1 size-4 shrink-0 text-brand-primary" />Somar pontos em gincanas escolares futuras</li>
          </ul>
          <div className="mt-4 flex gap-2 rounded-2xl bg-brand-light p-3 text-sm leading-6 text-brand-dark">
            <ShieldCheck className="mt-0.5 size-4 shrink-0" />
            Denuncias so pontuam apos validacao para evitar spam.
          </div>
        </Card>
        <InfoCard
          tone="orange"
          icon={<School className="size-5 text-brand-accent" />}
          title="Gincanas ecologicas"
          text="No futuro, escolas poderao participar de gincanas ecologicas, acumulando pontos por reciclagem, denuncias educativas e acoes ambientais."
        />
      </div>
    </AppShell>
  );
}
