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

export default function DenunciaPage() {
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [sent, setSent] = useState(false);

  const isSubmitEnabled = useMemo(() => Boolean(photoName), [photoName]);

  function onSelectPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setPhotoName(file?.name ?? null);
  }

  if (sent) {
    return (
      <AppShell hideBottomNav>
        <Header title="Denúncia enviada" subtitle="Recebemos sua solicitação e vamos acompanhar o encaminhamento." backHref="/" />
        <Card className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-light text-brand-dark">
            <CheckCircle2 className="size-9" />
          </div>
          <h2 className="text-xl font-black text-brand-text">Denúncia enviada com sucesso</h2>
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
        title="Fazer denúncia"
        subtitle="Envie uma foto e a localização do descarte irregular."
        backHref="/"
      />

      <section className="space-y-4">
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
            {photoName ? photoName : "Toque para abrir a câmera"}
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
                <p className="text-sm font-black text-brand-text">Detectando localização...</p>
                <p className="mt-1 text-sm text-brand-muted">Localização encontrada</p>
              </div>
            </div>
            <Badge>OK</Badge>
          </div>
        </Card>

        <Textarea
          label="Descrição opcional"
          placeholder="Ex: lixo acumulado na calçada, móveis descartados, entulho..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <Button type="button" fullWidth disabled={!isSubmitEnabled} onClick={() => setSent(true)}>
          ENVIAR DENÚNCIA
        </Button>

        {!isSubmitEnabled ? (
          <p className="text-center text-sm font-bold leading-6 text-brand-accent">Adicione uma foto para habilitar o envio.</p>
        ) : null}

        <p className="text-center text-xs leading-5 text-brand-muted">
          Sua denúncia será analisada e encaminhada ao setor responsável.
        </p>
      </section>
    </AppShell>
  );
}
