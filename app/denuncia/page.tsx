"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Textarea } from "@/components/Input";

export default function DenunciaPage() {
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const isSubmitEnabled = useMemo(() => Boolean(photoName), [photoName]);

  function onSelectPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setPhotoName(file?.name ?? null);
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-brand-background px-5 py-6">
      <Header title="Fazer denúncia" backHref="/" />

      <section className="space-y-4">
        <label className="block cursor-pointer rounded-xl border border-dashed border-brand-border bg-white p-5 text-center shadow-md transition hover:border-brand-primary">
          <input type="file" accept="image/*" className="hidden" onChange={onSelectPhoto} />
          <p className="text-sm font-semibold text-brand-text">Tirar ou enviar foto</p>
          <p className="mt-1 text-xs text-brand-muted">Toque para abrir a câmera</p>
          {photoName ? <p className="mt-2 text-xs text-brand-primary">Foto selecionada: {photoName}</p> : null}
        </label>

        <div className="rounded-xl border border-brand-border bg-white px-4 py-3 shadow-sm">
          <p className="text-sm text-brand-muted">Detectando localização...</p>
        </div>

        <Textarea
          placeholder="Adicione detalhes sobre o descarte irregular..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <Button type="button" fullWidth disabled={!isSubmitEnabled}>
          ENVIAR DENÚNCIA
        </Button>

        <p className="text-center text-xs text-brand-muted">
          Sua denúncia será analisada pela prefeitura em até 48h
        </p>
      </section>
    </main>
  );
}
