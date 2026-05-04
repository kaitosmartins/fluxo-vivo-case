import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-brand-background px-5 py-6">
      <section className="mb-6">
        <h1 className="text-2xl font-bold text-brand-text">Olá, Kaíto</h1>
        <p className="mt-1 text-sm text-brand-muted">Vamos cuidar do meio ambiente juntos</p>
      </section>

      <section className="mb-5">
        <Input placeholder="Onde descartar algo?" aria-label="Buscar local de descarte" />
      </section>

      <section className="mb-6 grid grid-cols-3 gap-3">
        <Button variant="secondary">Mapa</Button>
        <Button variant="secondary">Coleta</Button>
        <Link href="/denuncia" className="contents">
          <Button variant="accent">Denunciar</Button>
        </Link>
      </section>

      <section className="mb-6">
        <Card
          title="Coleta de recicláveis"
          subtitle="Separe plásticos, papéis e metais"
          badge="Hoje"
        />
      </section>

      <section className="rounded-xl border border-brand-border bg-white p-4 shadow-md">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-muted">Dicas rápidas</h2>
        <ul className="space-y-2 text-sm text-brand-text">
          <li>• Lave as embalagens antes de reciclar</li>
          <li>• Óleo de cozinha vai em posto específico</li>
        </ul>
      </section>
    </main>
  );
}
