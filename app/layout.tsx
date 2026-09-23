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

const metadataBase = new URL(
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: site.title,
  description: site.description,
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
      </body>
    </html>
  );
}
