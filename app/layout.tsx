import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>

export const metadata: Metadata = {
  title: "Móveis Planejados | Móveis sob medida",
  description: "Projetos personalizados em móveis planejados com design premium, visualização 3D e instalação especializada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
