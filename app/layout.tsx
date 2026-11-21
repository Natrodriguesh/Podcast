import type { Metadata, Viewport } from "next";
import { Jost, Roboto } from "next/font/google";
import { LogoSprite } from "@/components/brand/Logo";
import "./globals.css";

/* Tipografía del sistema: Roboto para titulares, Jost para todo lo que se lee. */
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Equitea",
  description: "Mujeres que emprenden, invierten y lideran.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FBF8F5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${roboto.variable} ${jost.variable}`}>
      <body>
        <LogoSprite />
        {children}
      </body>
    </html>
  );
}
