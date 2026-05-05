import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Check, MapPinned, Megaphone, Recycle, Search } from "lucide-react";
import { ActionCard } from "@/components/ActionCard";
import { AppShell } from "@/components/AppShell";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { InfoCard } from "@/components/InfoCard";
import { Input } from "@/components/Input";
import { SectionTitle } from "@/components/SectionTitle";

const impact = [
  { value: "2,8t", label: "kg reciclados" },
  { value: "186", label: "denuncias registradas", tone: "orange" },
  { value: "12", label: "bairros participantes" }
];

export default function HomePage() {
  return (
    <AppShell>
      <section className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-14 overflow-hidden rounded-3xl border border-brand-light bg-white shadow-sm">
            <Image src="/fluxo-vivo-logo.jpeg" alt="Fluxo Vivo" width={112} height={112} priority className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-brand-primary">Fluxo Vivo</p>
            <h1 className="text-2xl font-black leading-tight text-brand-text">Ola, Kaito</h1>
          </div>
        </div>
        <Badge tone="orange">Ilhabela</Badge>
      </section>

      <p className="-mt-3 mb-5 text-sm leading-6 text-brand-muted">Separe, descarte, conscientize e denuncie.</p>

      <Link href="/guia" className="mb-5 block">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-brand-muted" aria-hidden="true" />
          <Input className="pl-12" placeholder="Onde descartar algo?" aria-label="Buscar material no guia de descarte" readOnly />
        </div>
      </Link>

      <section className="mb-6 grid grid-cols-3 gap-3">
        <ActionCard href="/mapa" title="Mapa" text="Pontos proximos" icon={<MapPinned className="size-5" />} />
        <ActionCard href="/coleta" title="Coleta" text="Dias do bairro" icon={<Recycle className="size-5" />} />
        <ActionCard href="/denuncia" title="Denunciar" text="Foto + localizacao" icon={<Megaphone className="size-5" />} featured />
      </section>

      <Card className="mb-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <Badge>Hoje</Badge>
            <h2 className="mt-3 text-lg font-black text-brand-text">Coleta de reciclaveis</h2>
          </div>
          <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
            <Recycle className="size-6" />
          </span>
        </div>
        <p className="text-sm leading-6 text-brand-muted">Separe plasticos, papeis e metais limpos</p>
      </Card>

      <div className="mb-6">
        <InfoCard
          tone="orange"
          icon={<AlertTriangle className="size-5 text-brand-accent" />}
          title="Atencao"
          text="Verifique mudancas na coleta do seu bairro antes de colocar os residuos na rua."
        />
      </div>

      <section className="mb-6">
        <SectionTitle title="Dicas rapidas" action="Guia" />
        <Card>
          <ul className="space-y-3 text-sm leading-6 text-brand-text">
            <li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-brand-primary" />Lave as embalagens antes de reciclar</li>
            <li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-brand-primary" />Oleo de cozinha vai em posto especifico</li>
            <li className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-brand-primary" />Pilhas e baterias precisam de descarte especial</li>
          </ul>
        </Card>
      </section>

      <section>
        <SectionTitle title="Impacto da comunidade" />
        <div className="grid grid-cols-3 gap-3">
          {impact.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl p-3 shadow-sm ${
                item.tone === "orange" ? "bg-brand-accentSoft text-orange-900" : "bg-brand-light text-brand-dark"
              }`}
            >
              <p className="text-lg font-black leading-none">{item.value}</p>
              <p className="mt-1 text-xs font-bold leading-4 opacity-80">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-brand-muted">Dados simulados para apresentacao do MVP.</p>
      </section>
    </AppShell>
  );
}
