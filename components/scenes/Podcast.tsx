"use client";

import { useEffect, useRef, useState } from "react";
import { Mark } from "@/components/brand/Mark";
import { Comillas } from "@/components/brand/Taza";
import { Escena } from "@/components/ui/Escena";
import { CampoTexto } from "@/components/ui/CampoTexto";
import { podcast } from "@/lib/site";
import s from "./scenes.module.css";

export function Podcast() {
  const banda = useRef<HTMLDivElement>(null);
  const [anotado, setAnotado] = useState(false);

  /* La banda de procedencias avanza solo mientras scrolleas y se para cuando
     paras. No es un marquee en bucle. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let vivo = true;
    const paso = () => {
      if (!vivo) return;
      const nodo = banda.current;
      if (nodo?.parentElement) {
        const caja = nodo.parentElement.getBoundingClientRect();
        const vh = window.innerHeight;
        const t = Math.min(1, Math.max(0, (vh - caja.top) / (vh + caja.height)));
        nodo.style.transform = `translate3d(${-t * 26}%, 0, 0)`;
      }
      requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
    return () => {
      vivo = false;
    };
  }, []);

  return (
    <Escena id="podcast" campo="rojo">
      <div className={s.entradilla}>
        <h2 className={s.titulo}>
          <span className="rv">
            <span>
              {podcast.titulo.antes}
              <Mark>{podcast.titulo.marcada}</Mark>
            </span>
          </span>
        </h2>
        <div className={`${s.filete} filete`} aria-hidden="true" />
      </div>

      <p className={`${s.prosa} fx`}>{podcast.entrada}</p>

      <div className={s.geos} aria-label="Procedencia de las invitadas">
        <div className={s.geosFila} ref={banda}>
          {podcast.origenes.map((o) => (
            <span key={o}>{o}</span>
          ))}
          {podcast.origenes.slice(0, 2).map((o) => (
            <span key={`eco-${o}`} aria-hidden="true">
              {o}
            </span>
          ))}
        </div>
      </div>

      <blockquote className={`${s.cita} fx`}>
        <Comillas ancho="clamp(32px, 4vw, 52px)" />
        <p>
          <span className="ph">{podcast.cita.pendiente}</span>
        </p>
        <cite>
          <span className="ph">{podcast.cita.quien}</span>
        </cite>
      </blockquote>

      <p className={`${s.prosa} fx`}>{podcast.aviso.texto}</p>

      <form
        className={`${s.aviso} fx`}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setAnotado(true);
        }}
      >
        <CampoTexto
          id="aviso"
          etiqueta={podcast.aviso.etiqueta}
          tipo="email"
          pista={podcast.aviso.pista}
          autoComplete="email"
          className={s.campoAviso}
        />
        <button className="btn" type="submit" disabled={anotado}>
          {anotado ? podcast.aviso.hecho : podcast.aviso.boton}
        </button>
      </form>
    </Escena>
  );
}
