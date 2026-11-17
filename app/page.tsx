import { Apply } from "@/components/sections/Apply";
import { Footer } from "@/components/sections/Footer";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { Inside } from "@/components/sections/Inside";
import { Join } from "@/components/sections/Join";
import { What } from "@/components/sections/What";

/**
 * Una sola página. El orden responde a las preguntas de quien entra:
 * qué es → qué pasa dentro → quién lo lidera → cómo entro → formulario.
 *
 * No hay sublandings: "About" es la sección 03 de este mismo scroll.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <What />
      <Inside />
      <Founder />
      <Join />
      <Apply />
      <Footer />
    </main>
  );
}
