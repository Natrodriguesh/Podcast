"use client";

import { useState } from "react";
import { Escena } from "@/components/ui/Escena";
import { AreaTexto, CampoTexto } from "@/components/ui/CampoTexto";
import { solicitud } from "@/lib/site";
import s from "./scenes.module.css";

export function Solicitud() {
  const [enviada, setEnviada] = useState(false);

  /* Todavía no hay destino para las respuestas: cuando lo haya, aquí va el
     envío real. Mientras tanto no se pierde nada porque no se manda nada. */
  const alEnviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviada(true);
  };

  return (
    <Escena id="solicitud" campo="hueso">
      <div className={s.entradilla}>
        <h2 className={s.titulo}>
          <span className="rv">
            <span>{solicitud.titulo}</span>
          </span>
        </h2>
        <div className={`${s.filete} filete`} aria-hidden="true" />
      </div>

      {enviada ? (
        <div className={s.hecho} role="status">
          <p className={s.hechoT}>{solicitud.hecho.titulo}</p>
          <p className={s.prosa}>
            {solicitud.hecho.antes}
            <span className="ph">{solicitud.hecho.pendiente}</span>
          </p>
        </div>
      ) : (
        <>
          <p className={`${s.prosa} fx`}>
            {solicitud.entrada.antes}
            <span className="ph">{solicitud.entrada.pendiente}</span>
          </p>

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

            <div className={`${s.formActo} fx`} style={{ "--i": 5 } as React.CSSProperties}>
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
