import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Literata } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/content";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-cormorant",
  display: "swap",
});

const text = Literata({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-literata",
  display: "swap",
});

const metadataBase = new URL(site.url);

export const metadata: Metadata = {
  metadataBase,
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YeOlg-4_sbSXojacveWu2u0TmUxvWoHmK6A4-yqXbdA",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "es_AR",
    type: "website",
    siteName: site.legalName,
    images: [
      {
        url: "/images/hero-portada.webp",
        width: 1599,
        height: 1018,
        alt: "Cabeza de una serpiente verde, de perfil, con la boca abierta, sobre un fondo oscuro.",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#161a17",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${display.variable} ${text.variable} h-full`}>
      <body className="min-h-full bg-paper font-text text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-3 focus:text-night"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1DA851] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
          aria-label="Escribir por WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="currentColor">
            <path d="M20.5 3.5A11 11 0 0 0 1.1 17.2L0 24l6.9-1.8A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-4.1 1.1 1.1-4-.2-.3A9 9 0 1 1 12 21Zm5.2-6.7c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1s-1.1-.4-2.2-1.3a8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3c.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.4 11.4 0 0 0 4.4 3.9c.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.2-.3-.2-.6-.4Z" />
          </svg>
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </body>
    </html>
  );
}
