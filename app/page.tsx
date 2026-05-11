import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, BookOpen, MapPinned, Megaphone, Recycle, Search } from "lucide-react";
import { ActionCard } from "@/components/ActionCard";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { InfoCard } from "@/components/InfoCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { collectiveImpact, nextCollection, userImpact } from "@/data/mockData";

export default function HomePage() {
  return (
    <AppShell>
      <section className="mb-5 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="size-14 shrink-0 overflow-hidden rounded-3xl border border-brand-light bg-white shadow-sm">
            <Image src="/fluxo-vivo-logo.jpeg" alt="Fluxo Vivo" width={112} height={112} priority className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-wide text-brand-primary">Fluxo Vivo</p>
            <h1 className="text-2xl font-black leading-tight text-brand-text">Olá, Kaito</h1>
          </div>
        </div>
        <Badge tone="orange">Ilhabela</Badge>
      </section>

      <Card className="mb-4 border-brand-light bg-green-50">
        <div className="flex items-start gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
            <BookOpen className="size-5" />
          </span>
          <div>
            <h2 className="text-xl font-black leading-tight text-brand-text">O que você quer descartar hoje?</h2>
            <p className="mt-2 text-sm leading-6 text-brand-muted">
              Busque por pilha, óleo, vidro, eletrônico ou reciclável.
            </p>
          </div>
        </div>
        <Link href="/guia" className="mt-4 block">
          <Button fullWidth>
            <Search className="mr-2 size-5" />
            Buscar resíduo
          </Button>
        </Link>
      </Card>

      <section className="mb-6">
        <SectionTitle title="Próxima coleta no seu bairro" />
        <Card>
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <Badge>{nextCollection.day}</Badge>
              <h2 className="mt-3 text-lg font-black text-brand-text">{nextCollection.type}</h2>
              <p className="mt-1 text-sm font-bold text-brand-muted">
                {nextCollection.neighborhood} · {nextCollection.time}
              </p>
            </div>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
              <Recycle className="size-6" />
            </span>
          </div>
          <p className="text-sm leading-6 text-brand-muted">{nextCollection.detail}</p>
          <Link href="/coleta" className="mt-3 inline-flex text-sm font-black text-brand-primary">
            Ver calendário de coleta
          </Link>
        </Card>
      </section>

      <section className="mb-6 grid grid-cols-2 gap-3">
        <ActionCard href="/mapa" title="Pontos próximos" text="Onde levar resíduos" icon={<MapPinned className="size-5" />} featured />
        <ActionCard href="/denuncia" title="Reportar problema" text="Avisar sobre um ponto" icon={<Megaphone className="size-5" />} />
      </section>

      <section className="mb-6">
        <SectionTitle title="Seu impacto" />
        <div className="grid grid-cols-2 gap-3">
          {userImpact.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} tone={item.tone} />
          ))}
        </div>
      </section>

      <div className="mb-6">
        <InfoCard
          tone="orange"
          icon={<AlertTriangle className="size-5 text-brand-accent" />}
          title="Reportes ajudam no cuidado com a cidade"
          text="Avise quando encontrar descarte irregular, ponto cheio ou informação desatualizada."
        />
      </div>

      <section className="mb-6">
        <SectionTitle title="Impacto coletivo" />
        <Card>
          <p className="mb-4 text-sm font-bold leading-6 text-brand-text">Quando a cidade participa, o impacto aparece.</p>
          <div className="grid grid-cols-2 gap-3">
            {collectiveImpact.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-black leading-none text-brand-primary">{item.value}</p>
                <p className="mt-1 text-xs font-semibold leading-4 text-brand-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="border-brand-accentSoft bg-brand-warning">
        <p className="text-xs font-black uppercase tracking-wide text-brand-accent">Em breve: reaproveitamento inteligente</p>
        <p className="mt-2 text-sm leading-6 text-brand-muted">
          No futuro, o Fluxo Vivo poderá conectar comércios, feiras e restaurantes a pessoas ou instituições para reduzir desperdício de alimentos e materiais reaproveitáveis.
        </p>
      </Card>
    </AppShell>
  );
}
