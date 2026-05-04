import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-md px-4 py-6">
      <section className="mb-6">
        <h1 className="text-2xl font-bold">Olá, Kaíto</h1>
        <p className="mt-1 text-sm text-brand-muted">Vamos cuidar do meio ambiente juntos</p>
      </section>

      <section className="mb-5">
        <Input placeholder="Onde descartar algo?" aria-label="Busca por descarte" />
      </section>

      <section className="mb-6 grid grid-cols-3 gap-3">
        <Button>Mapa</Button>
        <Button>Coleta</Button>
        <Link href="/denuncia" className="contents">
          <Button variant="highlight">Denunciar</Button>
        </Link>
      </section>

      <section className="mb-6">
        <Card
          title="Coleta de recicláveis"
          subtitle="Separe plásticos, papéis e metais"
          badge="Hoje"
        />
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold">Dicas rápidas</h2>
        <ul className="space-y-2">
          <li className="rounded-control border border-brand-border bg-white px-4 py-3 text-sm text-brand-muted shadow-sm">
            Lave as embalagens antes de reciclar
          </li>
          <li className="rounded-control border border-brand-border bg-white px-4 py-3 text-sm text-brand-muted shadow-sm">
            Óleo de cozinha vai em posto específico
          </li>
        </ul>
      </section>
    </main>
  );
}
