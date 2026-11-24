"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import s from "./Carga.module.css";

/**
 * Entrada de la página. Mide carga real (fuentes + load), con un suelo de
 * 600ms para que la barra se vea y un tope de 4,2s para que nunca se quede
 * atascada. Al terminar, el telón sube y la página pasa a `.listo`, que es
 * lo que activa todos los revelados.
 *
 * El telón solo lo monta el cliente: sin JS la página se ve entera.
 */
export function Carga() {
  const [progreso, setProgreso] = useState(0);
  const [arriba, setArriba] = useState(false);
  const [fuera, setFuera] = useState(false);
  const hecho = useRef(false);

  useEffect(() => {
    const t0 = Date.now();
    let vivo = true;
    let p = 0;

    const tick = () => {
      if (!vivo || hecho.current) return;
      p += (0.86 - p) * 0.08;
      setProgreso(p);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const terminar = () => {
      if (hecho.current) return;
      hecho.current = true;
      const espera = Math.max(0, 600 - (Date.now() - t0));
      window.setTimeout(() => {
        setProgreso(1);
        window.setTimeout(() => {
          setArriba(true);
          document.documentElement.classList.add("listo");
          window.setTimeout(() => setFuera(true), 760);
        }, 180);
      }, espera);
    };

    const esperas: Promise<unknown>[] = [];
    if (document.fonts) esperas.push(document.fonts.ready);
    esperas.push(
      new Promise<void>((res) => {
        if (document.readyState === "complete") res();
        else window.addEventListener("load", () => res(), { once: true });
      })
    );
    Promise.all(esperas).then(terminar);
    const tope = window.setTimeout(terminar, 4200);

    return () => {
      vivo = false;
      window.clearTimeout(tope);
    };
  }, []);

  if (fuera) return null;

  return (
    <div className={s.carga} data-arriba={arriba ? "1" : undefined} aria-hidden="true">
      <div className={s.barra}>
        <span style={{ transform: `scaleX(${progreso})` }} />
      </div>
      <div className={s.logo}>
        <Logo variante="completo" ancho="min(52vw, 320px)" />
      </div>
    </div>
  );
}
