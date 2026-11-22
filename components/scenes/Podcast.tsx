"use client";

import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Escena } from "@/components/ui/Escena";
import { Banda } from "@/components/ui/Banda";
import { Plataformas } from "@/components/ui/Plataformas";
import { CampoTexto } from "@/components/ui/CampoTexto";
import { fotos, podcast } from "@/lib/site";
import s from "./scenes.module.css";

export function Podcast() {
  const [anotado, setAnotado] = useState(false);

  return (
    <Escena id="podcast" campo="rojo">
      {/* Aquí el título no es texto: es el bloqueo completo del logo. */}
      <h2 className={`${s.tituloLogo} fx`}>
        <Logo variante="completo" ancho="min(76vw, 520px)" titulo="Equitea Podcast" />
      </h2>

      <p className="lead fx">{podcast.entrada}</p>

      <p className="destacado fx">
        {podcast.destacado.antes}
        <em>{podcast.destacado.marcado}</em>.
      </p>

      <Plataformas />

      <p className="lead fx">{podcast.aviso.texto}</p>

      <form
        className={`${s.aviso} fx`}
        noValidate
        onSubmit={(ev) => {
          ev.preventDefault();
          setAnotado(true);
        }}
      >
        <CampoTexto
          id="aviso"
          etiqueta={podcast.aviso.etiqueta}
          tipo="email"
          pista={podcast.aviso.pista}
          autoComplete="email"
          className={s.avisoCampo}
        />
        <button className="btn" type="submit" disabled={anotado}>
          {anotado ? podcast.aviso.hecho : podcast.aviso.boton}
        </button>
      </form>

      <Banda src={fotos.micros.src} alt={fotos.micros.alt} />
    </Escena>
  );
}
