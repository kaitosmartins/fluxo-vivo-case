"use client";

import { BookOpen, CircleHelp, Leaf, Megaphone, Recycle, ShieldCheck, Trophy, UsersRound } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";
import { rankingNeighborhoods, scoreRules } from "@/data/mockData";

const ruleIcons = [Megaphone, Recycle, Leaf, BookOpen];

export default function RankingPage() {
  return (
    <AppShell>
      <Header title="Ranking de impacto" subtitle="Acompanhe ações positivas por bairro, com validação quando necessário." backHref="/" />

      <Card className="mb-5 border-brand-light bg-green-50">
        <div className="flex gap-3">
          <UsersRound className="mt-1 size-5 shrink-0 text-brand-primary" />
          <p className="text-sm leading-6 text-brand-muted">
            Seus pontos representam ações positivas para a cidade. Algumas ações precisam de validação antes de entrar no ranking.
          </p>
        </div>
      </Card>

      <section className="space-y-3">
        {rankingNeighborhoods.map((item, index) => (
          <Card key={item.name}>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-accentSoft text-orange-900">
                <Trophy className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="truncate font-black text-brand-text">{index + 1}. {item.name}</h2>
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

      <Card className="mt-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-accentSoft text-brand-accent">
            <CircleHelp className="size-5" />
          </span>
          <h2 className="font-black text-brand-text">Como ganhar pontos?</h2>
        </div>
        <div className="space-y-2">
          {scoreRules.map((rule, index) => {
            const Icon = ruleIcons[index % ruleIcons.length];
            return (
              <div key={rule.action} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 shrink-0 text-brand-primary" />
                  <span className="text-sm font-bold text-brand-text">{rule.action}</span>
                </div>
                <span className="shrink-0 text-xs font-black text-brand-accent">{rule.points}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex gap-2 rounded-2xl bg-brand-light p-3 text-sm leading-6 text-brand-dark">
          <ShieldCheck className="mt-0.5 size-4 shrink-0" />
          Pontos por denúncia só contam após validação. Descartes corretos e leituras educativas podem ser simulados no MVP.
        </div>
      </Card>

      <div className="mt-4">
        <InfoCard
          tone="orange"
          icon={<Leaf className="size-5 text-brand-accent" />}
          title="Competição com propósito"
          text="O ranking incentiva participação coletiva, não disputa vazia. A meta é melhorar a cidade."
        />
      </div>
    </AppShell>
  );
}
