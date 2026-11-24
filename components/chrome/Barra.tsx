"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { cta, menu } from "@/lib/site";
import s from "./Barra.module.css";

/**
 * Barra fija. Toma su color del campo que tiene detrás (variables que publica
 * Campo.tsx) y lleva la línea de progreso, que es la misma barra de carga de
 * la entrada convertida en indicador.
 */
export function Barra() {
  const [activa, setActiva] = useState<string | null>(null);

  useEffect(() => {
    const secciones = menu
      .map((m) => document.getElementById(m.id))
      .filter((n): n is HTMLElement => Boolean(n));

    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiva(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    secciones.forEach((n) => observador.observe(n));
    return () => observador.disconnect();
  }, []);

  return (
    <header className={s.barra}>
      <div className={s.progreso}>
        <span />
      </div>
      <div className={`${s.fila} wrap`}>
        <a className={s.logo} href="#inicio" aria-label="Equitea, inicio">
          <Logo variante="completo" ancho="104px" />
        </a>
        <nav className={s.menu} aria-label="Secciones">
          {menu.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              aria-current={activa === m.id ? "true" : undefined}
            >
              {m.texto}
            </a>
          ))}
        </nav>
        <a className="btn btn--sm" href={`#${cta.id}`}>
          {cta.texto}
        </a>
      </div>
    </header>
  );
}
