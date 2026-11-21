import { Mark } from "@/components/brand/Mark";
import { Escena } from "@/components/ui/Escena";
import { comunidad } from "@/lib/site";
import s from "./scenes.module.css";

export function Comunidad() {
  return (
    <Escena id="comunidad" campo="rojo">
      <div className={s.entradilla}>
        <h2 className={s.titulo}>
          <span className="rv">
            <span>
              {comunidad.titulo.antes}
              <Mark variante={1}>{comunidad.titulo.marcada}</Mark>
            </span>
          </span>
        </h2>
        <div className={`${s.filete} filete`} aria-hidden="true" />
      </div>

      <div className={s.cuerpo}>
        <p className={`${s.prosa} fx`}>
          <span className="ph">{comunidad.entrada.pendiente}</span>
        </p>
        {comunidad.columnas.map((c, i) => (
          <p
            className={`${s.prosa} fx`}
            style={{ "--i": i + 1 } as React.CSSProperties}
            key={c.pendiente}
          >
            <span className="ph">{c.pendiente}</span>
          </p>
        ))}
      </div>
    </Escena>
  );
}
