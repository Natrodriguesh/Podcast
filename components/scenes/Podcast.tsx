"use client";

import { useState } from "react";
import { Escena } from "@/components/ui/Escena";
import { Hueco } from "@/components/ui/Hueco";
import { CampoTexto } from "@/components/ui/CampoTexto";
import { podcast } from "@/lib/site";
import s from "./scenes.module.css";

export function Podcast() {
  const [anotado, setAnotado] = useState(false);

  return (
    <Escena id="podcast" campo="rojo">
      <h2 className="ttl">
        <span className="rv">
          <span>{podcast.titulo}</span>
        </span>
      </h2>

      <p className="lead fx">{podcast.entrada}</p>

      <p className="destacado fx">
        {podcast.destacado.antes}
        <em>{podcast.destacado.marcado}</em>.
      </p>

      <Hueco forma="medio" ancho="min(80%, 460px)" />

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
    </Escena>
  );
}
