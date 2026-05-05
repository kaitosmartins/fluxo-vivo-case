import { Award, CheckCircle2, Clock3, History, Share2, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";

const medals = ["Primeira denuncia", "Reciclador iniciante", "Bairro consciente"];

const history = [
  { text: "Denuncia enviada", detail: "Em analise", icon: Clock3 },
  { text: "Descarte registrado", detail: "+40 pontos", icon: CheckCircle2 },
  { text: "Lembrete de coleta ativado", detail: "Zona Sul", icon: History }
];

export default function PerfilPage() {
  return (
    <AppShell>
      <Header title="Perfil" subtitle="Seu impacto ambiental em Ilhabela." backHref="/" />

      <Card className="mb-5 bg-brand-primary text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white/80">Kaito</p>
            <h1 className="mt-1 text-2xl font-black">Guardiao Verde</h1>
            <p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/80">
              Voce esta fortalecendo o descarte correto e a fiscalizacao comunitaria.
            </p>
          </div>
          <div className="flex size-14 shrink-0 items-center justify-center rounded-3xl bg-white/15">
            <ShieldCheck className="size-8" />
          </div>
        </div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[72%] rounded-full bg-brand-accentSoft" />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold leading-5 text-white/85">720 / 1000 pontos para o proximo nivel</p>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">Nivel 4</span>
        </div>
      </Card>

      <section className="mb-5 grid grid-cols-3 gap-3">
        <StatCard value="720" label="pontos" tone="orange" />
        <StatCard value="8" label="denuncias" />
        <StatCard value="24" label="descartes corretos" />
      </section>

      <Card className="mb-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
            <History className="size-5" />
          </span>
          <h2 className="font-black text-brand-text">Historico de acoes</h2>
        </div>
        <div className="space-y-2">
          {history.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-brand-primary" />
                  <span className="text-sm font-bold text-brand-text">{item.text}</span>
                </div>
                <span className="text-xs font-black text-brand-muted">{item.detail}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <section className="mb-5">
        <SectionTitle title="Medalhas" />
        <div className="space-y-3">
          {medals.map((medal) => (
            <Card key={medal} className="py-3">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-accentSoft text-brand-accent">
                  <Award className="size-5" />
                </span>
                <span className="font-black text-brand-text">{medal}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mb-5 border-brand-light bg-green-50">
        <p className="text-xs font-black uppercase tracking-wide text-brand-primary">Certificado digital</p>
        <h2 className="mt-2 text-lg font-black text-brand-text">Impacto ambiental positivo</h2>
        <p className="mt-2 text-sm leading-6 text-brand-muted">
          Voce ajudou a fortalecer a coleta seletiva e a fiscalizacao comunitaria em Ilhabela.
        </p>
      </Card>

      <Button fullWidth variant="accent">
        <Share2 className="mr-2 size-5" />
        Compartilhar impacto
      </Button>
    </AppShell>
  );
}
