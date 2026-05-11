import { Award, BookOpen, CheckCircle2, Clock3, History, MapPinned, Megaphone, Share2, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { collectiveImpact, userHistory } from "@/data/mockData";

const medals = ["Guardião Verde", "Reciclador iniciante", "Bairro consciente"];
const historyIcons = [Clock3, CheckCircle2, BookOpen, MapPinned];

export default function PerfilPage() {
  return (
    <AppShell>
      <Header title="Perfil" subtitle="Sua jornada de impacto ambiental em Ilhabela." backHref="/" />

      <Card className="mb-5 bg-brand-primary text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-white/80">Kaito Oliveira</p>
            <h1 className="mt-1 text-2xl font-black">Guardião Verde</h1>
            <p className="mt-2 max-w-[15rem] text-sm leading-6 text-white/85">
              Você está fortalecendo o descarte correto e a fiscalização comunitária.
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
          <p className="text-xs font-semibold leading-5 text-white/85">720 / 1000 pontos para o próximo nível</p>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">Nível 4</span>
        </div>
      </Card>

      <section className="mb-5 grid grid-cols-2 gap-3">
        <StatCard value="720" label="pontos acumulados" tone="orange" />
        <StatCard value="8" label="denúncias enviadas" />
        <StatCard value="24" label="descartes registrados" />
        <StatCard value="6" label="dicas concluídas" />
      </section>

      <Card className="mb-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
            <History className="size-5" />
          </span>
          <h2 className="font-black text-brand-text">Histórico de ações</h2>
        </div>
        <div className="space-y-2">
          {userHistory.map((item, index) => {
            const Icon = historyIcons[index % historyIcons.length];
            return (
              <div key={item.text} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-2">
                <div className="flex min-w-0 items-center gap-2">
                  <Icon className="size-4 shrink-0 text-brand-primary" />
                  <span className="text-sm font-bold text-brand-text">{item.text}</span>
                </div>
                <span className="shrink-0 text-xs font-black text-brand-muted">{item.detail}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <section className="mb-5">
        <SectionTitle title="Selos ambientais" />
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
        <div className="mb-3 flex items-center gap-3">
          <Megaphone className="size-5 text-brand-primary" />
          <h2 className="font-black text-brand-text">Impacto coletivo</h2>
        </div>
        <p className="mb-4 text-sm leading-6 text-brand-muted">Quando a cidade participa, o impacto aparece.</p>
        <div className="grid grid-cols-2 gap-3">
          {collectiveImpact.slice(0, 4).map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-3">
              <p className="text-lg font-black leading-none text-brand-primary">{item.value}</p>
              <p className="mt-1 text-xs font-semibold leading-4 text-brand-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <Button fullWidth variant="accent">
        <Share2 className="mr-2 size-5" />
        Compartilhar impacto
      </Button>
    </AppShell>
  );
}
