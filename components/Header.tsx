import Link from "next/link";

interface HeaderProps {
  title: string;
  backHref?: string;
}

export function Header({ title, backHref }: HeaderProps) {
  return (
    <header className="mb-5 flex items-center gap-3">
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex size-10 items-center justify-center rounded-full border border-brand-border bg-white text-lg text-brand-text shadow-sm"
          aria-label="Voltar"
        >
          ←
        </Link>
      ) : null}
      <h1 className="text-xl font-semibold text-brand-text">{title}</h1>
    </header>
  );
}
