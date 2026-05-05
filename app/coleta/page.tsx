"use client";

import { useState } from "react";
import { AlertTriangle, Bell, CheckCircle2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { InfoCard } from "@/components/InfoCard";

const bairros = ["Centro", "Barra Velha", "Itaguassu", "Zona Sul", "Castelhanos"];

const schedules = [
  { type: "Coleta comum", days: "Segunda, quarta e sexta", time: "A partir das 18h" },
  { type: "Coleta reciclavel", days: "Terca e quinta", time: "A partir das 9h" },
  { type: "Moveis e entulho", days: "Sabado", time: "Com agendamento" }
];

export default function ColetaPage() {
  const [bairro, setBairro] = useState("Centro");
  const [reminderEnabled, setReminderEnabled] = useState(false);

  return (
    <AppShell>
      <Header title="Calendario de coleta" subtitle="Confira os dias por bairro e ative lembretes." backHref="/" />

      <div className="mb-4 flex items-center gap-2 rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-black text-brand-primary shadow-sm">
        <CheckCircle2 className="size-4" />
        Informacoes atualizadas hoje
      </div>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-brand-text">Bairro</span>
        <select
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
          className="min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-bold text-brand-text shadow-sm outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light"
        >
          {bairros.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>

      <div className="mb-4">
        <InfoCard
          tone="orange"
          icon={<AlertTriangle className="size-5 text-brand-accent" />}
          title="Cronograma sujeito a alteracoes."
          text={`Cronograma sujeito a alteracoes por clima, feriados ou eventos locais em ${bairro}.`}
        />
      </div>

      <section className="space-y-3">
        {schedules.map((schedule) => (
          <Card key={schedule.type}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-black text-brand-text">{schedule.type}</h2>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{schedule.days}</p>
                <p className="mt-1 text-sm font-bold text-brand-text">{schedule.time}</p>
              </div>
              <Badge tone={schedule.type.includes("reciclavel") ? "green" : "gray"}>{bairro}</Badge>
            </div>
          </Card>
        ))}
      </section>

      <Button
        fullWidth
        variant={reminderEnabled ? "secondary" : "primary"}
        className={`mt-5 ${reminderEnabled ? "border-brand-light bg-brand-light text-brand-dark" : ""}`}
        onClick={() => setReminderEnabled(true)}
      >
        {reminderEnabled ? <CheckCircle2 className="mr-2 size-5" /> : <Bell className="mr-2 size-5" />}
        {reminderEnabled ? "Lembrete ativado" : "Ativar lembrete"}
      </Button>
    </AppShell>
  );
}
