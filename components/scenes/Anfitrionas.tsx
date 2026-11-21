import { Escena } from "@/components/ui/Escena";
import { anfitrionas } from "@/lib/site";
import s from "./scenes.module.css";

export function Anfitrionas() {
  return (
    <Escena id="anfitrionas" campo="hueso">
      <div className={s.entradilla}>
        <h2 className={s.titulo}>
          <span className="rv">
            <span>{anfitrionas.titulo}</span>
          </span>
        </h2>
        <div className={`${s.filete} filete`} aria-hidden="true" />
      </div>

      <div className={s.personas}>
        {anfitrionas.personas.map((p, i) => (
          <div className="fx" style={{ "--i": i } as React.CSSProperties} key={p.nombre}>
            <h3 className={s.personaN}>
              <span className="rv">
                <span>{p.nombre}</span>
              </span>
            </h3>
            <p className={s.personaR}>{p.rol}</p>
            <p className={s.personaL}>
              <span className="ph">{p.pendiente}</span>
            </p>
          </div>
        ))}
      </div>
    </Escena>
  );
}
