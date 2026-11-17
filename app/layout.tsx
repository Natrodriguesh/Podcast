import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";

import "./globals.css";

import { Atmosphere, Frame } from "@/components/chrome/Atmosphere";
import { Header } from "@/components/chrome/Header";
import { Loader } from "@/components/chrome/Loader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

/* Dos familias, como marca el benchmark: una serif editorial para el display
   y una grotesca para todo lo demás. Las etiquetas usan la grotesca en
   versalitas con tracking abierto — no hay una tercera familia. */

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EQUITEA — Comunidad",
  description:
    "Comunidad privada en español para mujeres que construyen. Marcador de posición.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Loader />
        <Atmosphere />
        <Frame />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
