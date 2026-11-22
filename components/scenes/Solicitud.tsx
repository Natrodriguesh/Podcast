"use client";

import { useState } from "react";
import { Sticker } from "@/components/brand/Sticker";
import { Escena } from "@/components/ui/Escena";
import { AreaTexto, CampoTexto } from "@/components/ui/CampoTexto";
import { solicitud } from "@/lib/site";
import e from "@/components/ui/Escena.module.css";
import s from "./scenes.module.css";

export function Solicitud() {
  const [enviada, setEnviada] = useState(false);

  /* Todavía no hay destino para las respuestas: cuando lo haya, aquí va el
     envío real. Mientras tanto no se pierde nada porque no se manda nada. */
  const alEnviar = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setEnviada(true);
  };

  return (
    <Escena id="solicitud" campo="hueso">
      <h2 className="ttl">
        <span className="rv">
          <span>{solicitud.titulo}</span>
        </span>
      </h2>

      {enviada ? (
        <div className={s.hecho} role="status">
          <p className={s.hechoT}>{solicitud.hecho.titulo}</p>
          <p className="lead">{solicitud.hecho.texto}</p>
        </div>
      ) : (
        <>
          <p className="lead fx">{solicitud.entrada}</p>

          <Sticker
            nombre="girls-just-want-to-have-funds"
            texto="Girls just want to have funds"
            ancho="min(58vw, 380px)"
            className="fx"
          />

          <form className={s.form} onSubmit={alEnviar} noValidate>
            {solicitud.campos.map((c, i) => (
              <div className="fx" style={{ "--i": i } as React.CSSProperties} key={c.id}>
                <CampoTexto
                  id={c.id}
                  etiqueta={c.etiqueta}
                  tipo={c.tipo}
                  pista={c.pista}
                  autoComplete={"autoComplete" in c ? c.autoComplete : undefined}
                />
              </div>
            ))}

            <div className="fx" style={{ "--i": 4 } as React.CSSProperties}>
              <AreaTexto
                id={solicitud.mensaje.id}
                etiqueta={solicitud.mensaje.etiqueta}
                pista={solicitud.mensaje.pista}
              />
            </div>

            <div className={`${s.formActo} ${e.acto} fx`} style={{ "--i": 5 } as React.CSSProperties}>
              <button className="btn" type="submit">
                {solicitud.enviar}
              </button>
            </div>
          </form>
        </>
      )}
    </Escena>
  );
}
