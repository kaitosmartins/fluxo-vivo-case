import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fluxo Vivo",
  description: "Aplicação de sustentabilidade para descarte correto, coleta e reportes ambientais"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
