"use client";

import { useEffect } from "react";
import { FONDO, LOGO, TINTA, type Campo as TCampo } from "@/lib/campos";
import s from "./Campo.module.css";

/* ---------------------------------------------------------------------------
   El campo es el fondo de toda la pagina: una capa fija detras del contenido.
   El scroll no mueve bloques sobre un fondo quieto, mueve el fondo.

   El color nuevo no se funde con el viejo (daria rosas fuera de paleta):
   entra por un cuenco que sube desde abajo hasta llenar la pantalla. Es la
   forma de taza del sistema, a tamano de pantalla.

   El motor no conoce ninguna escena. Lee las que declaran [data-campo] en el
   documento y publica el resultado como variables CSS en <html>, para que la
   barra, los puentes y lo que haga falta se enganchen sin acoplarse.
--------------------------------------------------------------------------- */

type Parada = { y: number; color: string; campo: TCampo };

export function Campo() {
  useEffect(() => {
    const raiz = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let paradas: Parada[] = [];

    /* Cada escena fija su color en su interior y deja los extremos libres:
       la transicion ocurre en ese margen, que es donde cae el puente. */
    const medir = () => {
      const vh = window.innerHeight;
      paradas = [];
      document.querySelectorAll<HTMLElement>("[data-campo]").forEach((el) => {
        const campo = el.dataset.campo as TCampo;
        const color = FONDO[campo];
        if (!color) return;
        const caja = el.getBoundingClientRect();
        const arriba = caja.top + window.scrollY;
        const margen = Math.min(caja.height * 0.3, vh * 0.2);
        paradas.push({ y: arriba + margen, color, campo });
        paradas.push({ y: arriba + caja.height - margen, color, campo });
      });
    };

    const campoEn = (y: number) => {
      if (!paradas.length) {
        return { desde: FONDO.hueso, hacia: FONDO.hueso, p: 0, campo: "hueso" as TCampo };
      }
      const primera = paradas[0];
      if (y <= primera.y) {
        return { desde: primera.color, hacia: primera.color, p: 0, campo: primera.campo };
      }
      for (let i = 0; i < paradas.length - 1; i++) {
        const a = paradas[i];
        const b = paradas[i + 1];
        if (y >= a.y && y <= b.y) {
          if (a.color === b.color) return { desde: a.color, hacia: a.color, p: 0, campo: a.campo };
          const t = (y - a.y) / Math.max(1, b.y - a.y);
          return { desde: a.color, hacia: b.color, p: t, campo: t > 0.5 ? b.campo : a.campo };
        }
      }
      const z = paradas[paradas.length - 1];
      return { desde: z.color, hacia: z.color, p: 0, campo: z.campo };
    };

    /* Parallaje de puntero con retardo: la escena responde, pero no al instante. */
    let px = 0.5, py = 0.42, destinoX = 0.5, destinoY = 0.42;
    const alMover = (e: PointerEvent) => {
      destinoX = e.clientX / window.innerWidth;
      destinoY = e.clientY / window.innerHeight;
    };

    let vivo = true;
    const paso = () => {
      if (!vivo) return;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const recorrido = Math.max(1, document.documentElement.scrollHeight - vh);

      raiz.style.setProperty("--progreso", String(Math.min(1, y / recorrido)));

      const f = campoEn(y + vh * 0.5);
      raiz.style.setProperty("--campo-desde", f.desde);
      raiz.style.setProperty("--campo-hacia", f.hacia);
      raiz.style.setProperty("--campo-p", `${f.p * 165}%`);
      raiz.style.setProperty("--puente-tinta", LOGO[f.campo]);

      const enRojo = f.campo === "rojo";
      raiz.style.setProperty("--grano", enRojo ? "0.07" : "0");
      raiz.style.setProperty("--brillo", enRojo ? "0.95" : "0.3");

      /* La barra toma el color que tiene justo detras, no el del centro. */
      const arriba = campoEn(y + 28).campo;
      raiz.style.setProperty("--barra-fondo", FONDO[arriba]);
      raiz.style.setProperty("--barra-tinta", TINTA[arriba]);
      raiz.style.setProperty("--barra-logo", LOGO[arriba]);
      raiz.dataset.barra = arriba;

      px += (destinoX - px) * 0.045;
      py += (destinoY - py) * 0.045;
      raiz.style.setProperty("--puntero-x", `${px * 100}%`);
      raiz.style.setProperty("--puntero-y", `${py * 100}%`);

      requestAnimationFrame(paso);
    };

    medir();
    if (!reduce) window.addEventListener("pointermove", alMover, { passive: true });
    window.addEventListener("resize", medir, { passive: true });
    window.addEventListener("load", medir);
    requestAnimationFrame(paso);

    /* Las escenas cambian de alto cuando entran las fuentes o una imagen. */
    const observador = new ResizeObserver(medir);
    observador.observe(document.body);

    return () => {
      vivo = false;
      observador.disconnect();
      window.removeEventListener("pointermove", alMover);
      window.removeEventListener("resize", medir);
      window.removeEventListener("load", medir);
    };
  }, []);

  return (
    <div className={s.campo} aria-hidden="true">
      <div className={s.hacia} />
      <div className={s.brillo} />
      <div className={s.grano} />
    </div>
  );
}
