"use client";

import { useState } from "react";
import { AlertTriangle, Bell, CheckCircle2, Clock3, Recycle } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";
import { collectionNeighborhoods, collectionSchedule } from "@/data/mockData";

export default function ColetaPage() {
  const [bairro, setBairro] = useState("Centro");
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const nextSchedule = collectionSchedule[1];

  return (
    <AppShell>
      <Header title="Coleta do meu bairro" subtitle="Dias e horários para se organizar sem deixar resíduos na rua." backHref="/" />

      <Card className="mb-4 border-brand-light bg-green-50">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <Badge>Próxima coleta</Badge>
            <h2 className="mt-3 text-xl font-black text-brand-text">{nextSchedule.type}</h2>
            <p className="mt-1 text-sm font-bold text-brand-muted">
              {bairro} · {nextSchedule.days} · {nextSchedule.time}
            </p>
          </div>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
            <Recycle className="size-6" />
          </span>
        </div>
        <p className="text-sm leading-6 text-brand-muted">{nextSchedule.detail}</p>
        <Button
          fullWidth
          variant={reminderEnabled ? "secondary" : "accent"}
          className={`mt-4 ${reminderEnabled ? "border-brand-light bg-white text-brand-dark" : ""}`}
          onClick={() => setReminderEnabled(true)}
        >
          {reminderEnabled ? <CheckCircle2 className="mr-2 size-5" /> : <Bell className="mr-2 size-5" />}
          {reminderEnabled ? "Lembrete ativado" : "Ativar lembrete de coleta"}
        </Button>
      </Card>

      <div className="mb-4 flex items-center gap-2 rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-black text-brand-primary shadow-sm">
        <CheckCircle2 className="size-4" />
        Informações atualizadas hoje
      </div>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-brand-text">Bairro ou região</span>
        <select
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
          className="min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-bold text-brand-text shadow-sm outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light"
        >
          {collectionNeighborhoods.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>

      <div className="mb-4">
        <InfoCard
          icon={<Clock3 className="size-5 text-brand-primary" />}
          title={`Agenda simulada para ${bairro}`}
          text="Separe seus resíduos antes do horário de coleta para evitar sujeira, mau cheiro e descarte irregular."
        />
      </div>

      <section className="space-y-3">
        {collectionSchedule.map((schedule) => (
          <Card key={schedule.type}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-black text-brand-text">{schedule.type}</h2>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{schedule.days}</p>
                <p className="mt-1 text-sm font-black text-brand-primary">{schedule.time}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{schedule.detail}</p>
              </div>
              <Badge tone={schedule.type.includes("Reciclável") ? "green" : "gray"}>{bairro}</Badge>
            </div>
          </Card>
        ))}
      </section>

      <div className="mt-4">
        <InfoCard
          tone="orange"
          icon={<AlertTriangle className="size-5 text-brand-accent" />}
          title="Recicláveis limpos e secos"
          text="Materiais recicláveis devem estar limpos e secos sempre que possível."
        />
      </div>
    </AppShell>
  );
}
