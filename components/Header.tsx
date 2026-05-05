import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  backHref?: string;
  showLogo?: boolean;
}

export function Header({ title, subtitle, backHref, showLogo = true }: HeaderProps) {
  return (
    <header className="mb-5 flex items-start gap-3">
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-border bg-white text-xl font-bold text-brand-text shadow-sm"
          aria-label="Voltar"
        >
          <ArrowLeft className="size-5" />
        </Link>
      ) : null}

      <div className="min-w-0 flex-1">
        {title ? <h1 className="text-2xl font-black leading-tight text-brand-text">{title}</h1> : null}
        {subtitle ? <p className="mt-1 text-sm leading-5 text-brand-muted">{subtitle}</p> : null}
      </div>

      {showLogo ? (
        <div className="size-11 shrink-0 overflow-hidden rounded-2xl border border-brand-light bg-white shadow-sm">
          <Image
            src="/fluxo-vivo-logo.jpeg"
            alt="Fluxo Vivo"
            width={88}
            height={88}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
    </header>
  );
}
