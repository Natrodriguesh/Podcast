"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inercia del scroll.
 *
 * Clave: los clics del menú usan ESTE MISMO motor. Si la rueda va suave y
 * el menú salta de golpe, se rompe la ilusión — es el fallo más común en
 * las webs que imitan este tipo de scroll.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1, // por encima de ~1.3 la página parece ir con retraso
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.4,
    });

    let frame = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    // Las anclas del menú entran por el mismo motor que la rueda.
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('a[href^="#"]');
      if (!(target instanceof HTMLAnchorElement)) return;

      const id = target.getAttribute("href")?.slice(1);
      if (!id) return;

      const destination = document.getElementById(id);
      if (!destination) return;

      event.preventDefault();
      lenis.scrollTo(destination, { offset: -72, duration: 1.4 });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
