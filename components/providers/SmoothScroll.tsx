"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Scroll con inercia. Los anclas del menú se mueven con el mismo motor que la
 * rueda, así que pinchar y scrollear se sienten igual.
 * Con "reducir movimiento" no se instala: el scroll queda nativo.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let marco = 0;

    if (!reduce) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, touchMultiplier: 1.4 });
      const raf = (t: number) => {
        lenis?.raf(t);
        marco = requestAnimationFrame(raf);
      };
      marco = requestAnimationFrame(raf);
    }

    const alPinchar = (e: MouseEvent) => {
      const destino = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!destino) return;
      const id = destino.getAttribute("href")?.slice(1);
      const nodo = id ? document.getElementById(id) : null;
      if (!nodo) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(nodo, { offset: -56, duration: 1.35 });
      else nodo.scrollIntoView({ behavior: "auto", block: "start" });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", alPinchar);
    return () => {
      document.removeEventListener("click", alPinchar);
      cancelAnimationFrame(marco);
      lenis?.destroy();
    };
  }, []);

  return null;
}
