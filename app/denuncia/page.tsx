"use client";

import Link from "next/link";
import { ChangeEvent, useMemo, useState } from "react";
import { Camera, CheckCircle2, Clock3, FileCheck2, LocateFixed, RefreshCw } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Textarea } from "@/components/Textarea";
import { complaintTypes } from "@/data/mockData";

export default function DenunciaPage() {
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [problemType, setProblemType] = useState("");
  const [description, setDescription] = useState("");
  const [sent, setSent] = useState(false);

  const isSubmitEnabled = useMemo(() => Boolean(photoName && problemType), [photoName, problemType]);

  function onSelectPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setPhotoName(file?.name ?? null);
  }

  if (sent) {
    return (
      <AppShell hideBottomNav>
        <Header title="Reporte enviado" subtitle="Recebemos seu reporte e vamos acompanhar a análise." backHref="/" />
        <Card className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-light text-brand-dark">
            <CheckCircle2 className="size-9" />
          </div>
          <h2 className="text-xl font-black text-brand-text">Reporte enviado com sucesso</h2>
          <p className="mt-2 text-sm leading-6 text-brand-muted">
            Obrigado por ajudar a cidade a identificar pontos de descarte irregular.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-left">
            <div className="rounded-2xl bg-slate-50 p-3">
              <FileCheck2 className="mb-2 size-5 text-brand-primary" />
              <p className="text-[11px] font-bold uppercase text-brand-muted">Protocolo</p>
              <p className="mt-1 text-sm font-black text-brand-text">FV-48291</p>
            </div>
            <div className="rounded-2xl bg-brand-light p-3">
              <Clock3 className="mb-2 size-5 text-brand-dark" />
              <p className="text-[11px] font-bold uppercase text-brand-muted">Status</p>
              <p className="mt-1 text-sm font-black text-brand-text">Em análise</p>
            </div>
            <div className="rounded-2xl bg-brand-accentSoft p-3">
              <Clock3 className="mb-2 size-5 text-brand-accent" />
              <p className="text-[11px] font-bold uppercase text-brand-muted">Previsão</p>
              <p className="mt-1 text-sm font-black text-brand-text">Até 48h</p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-brand-warning p-3 text-left text-sm font-bold leading-6 text-brand-muted">
            Seu reporte será analisado antes de gerar pontos.
          </div>
          <Link href="/" className="mt-5 block">
            <Button fullWidth>Voltar ao início</Button>
          </Link>
        </Card>
      </AppShell>
    );
  }

  return (
    <AppShell hideBottomNav>
      <Header
        title="Reportar problema"
        subtitle="Reporte descarte irregular com tipo de problema, foto e localização."
        backHref="/"
      />

      <section className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-brand-text">Tipo de problema</span>
          <select
            value={problemType}
            onChange={(event) => setProblemType(event.target.value)}
            className="min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-bold text-brand-text shadow-sm outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light"
          >
            <option value="">Selecione uma opção</option>
            {complaintTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className={`block cursor-pointer rounded-3xl border border-dashed p-6 text-center shadow-soft transition ${
          photoName ? "border-brand-primary bg-brand-light" : "border-brand-border bg-white hover:border-brand-primary"
        }`}>
          <input type="file" accept="image/*" className="hidden" onChange={onSelectPhoto} />
          <span className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-white text-brand-primary shadow-sm">
            {photoName ? <CheckCircle2 className="size-8" /> : <Camera className="size-8" />}
          </span>
          <span className="mt-4 block text-base font-black text-brand-text">
            {photoName ? "Foto adicionada" : "Tirar ou enviar foto"}
          </span>
          <span className="mt-1 block text-sm leading-6 text-brand-muted">
            {photoName ? photoName : "Pode ser uma foto simulada para o MVP"}
          </span>
          {photoName ? (
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-dark">
              <RefreshCw className="size-4" />
              Trocar foto
            </span>
          ) : null}
        </label>

        <Card>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                <LocateFixed className="size-5" />
              </span>
              <div>
                <p className="text-sm font-black text-brand-text">Localização simulada</p>
                <p className="mt-1 text-sm text-brand-muted">Centro, Ilhabela - SP</p>
              </div>
            </div>
            <Badge>OK</Badge>
          </div>
        </Card>

        <Textarea
          label="Descrição opcional"
          placeholder="Ex: resíduos acumulados na calçada, móveis descartados, entulho perto da área verde..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <Button type="button" fullWidth disabled={!isSubmitEnabled} onClick={() => setSent(true)}>
          Enviar reporte
        </Button>

        {!isSubmitEnabled ? (
          <p className="text-center text-sm font-bold leading-6 text-brand-accent">
            Selecione o tipo de problema e envie uma foto para continuar.
          </p>
        ) : null}

        <p className="text-center text-xs leading-5 text-brand-muted">
          Seu reporte será analisado antes de gerar pontos.
        </p>
      </section>
    </AppShell>
  );
}
