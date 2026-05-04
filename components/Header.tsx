import Link from 'next/link';

interface HeaderProps {
  title: string;
  backHref?: string;
}

export function Header({ title, backHref }: HeaderProps) {
  return (
    <header className="mb-6 flex items-center gap-3">
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-white text-xl text-brand-text shadow-md transition hover:bg-slate-50 active:bg-slate-100"
          aria-label="Voltar"
        >
          ←
        </Link>
      ) : null}
      <h1 className="text-xl font-bold text-brand-text">{title}</h1>
    </header>
  );
}
