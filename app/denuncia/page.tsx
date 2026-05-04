'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Textarea } from '@/components/Input';

export default function DenunciaPage() {
  const [hasPhoto, setHasPhoto] = useState(false);

  return (
    <main className="mx-auto min-h-dvh w-full max-w-md px-4 py-6">
      <Header title="Fazer denúncia" backHref="/" />

      <section className="mb-5 rounded-card border border-dashed border-brand-border bg-white p-4 text-center shadow-soft">
        <button
          type="button"
          onClick={() => setHasPhoto(true)}
          className="w-full rounded-control border border-brand-border bg-brand-bg px-4 py-5 text-sm font-semibold text-brand-text transition hover:bg-slate-100 active:bg-slate-200"
        >
          Tirar ou enviar foto
        </button>
        <p className="mt-2 text-xs text-brand-muted">Toque para abrir a câmera</p>
      </section>

      <section className="mb-5 rounded-card border border-brand-border bg-white px-4 py-3 shadow-sm">
        <p className="text-sm text-brand-muted">Detectando localização...</p>
      </section>

      <section className="mb-6">
        <label htmlFor="descricao" className="mb-2 block text-sm font-medium text-brand-text">
          Descrição (opcional)
        </label>
        <Textarea
          id="descricao"
          placeholder="Adicione detalhes sobre o descarte irregular..."
        />
      </section>

      <Button variant="primary" block disabled={!hasPhoto}>
        ENVIAR DENÚNCIA
      </Button>

      <p className="mt-3 text-center text-xs text-brand-muted">
        Sua denúncia será analisada pela prefeitura em até 48h
      </p>
    </main>
  );
}
