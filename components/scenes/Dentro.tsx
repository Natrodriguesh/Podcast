import { Escena } from "@/components/ui/Escena";
import { dentro } from "@/lib/site";
import s from "./scenes.module.css";

export function Dentro() {
  return (
    <Escena id="dentro" campo="amarillo">
      <div className={s.entradilla}>
        <h2 className={s.titulo}>
          <span className="rv">
            <span>{dentro.titulo}</span>
          </span>
        </h2>
      </div>

      <p className={`${s.prosa} fx`}>
        <span className="ph">{dentro.entrada.pendiente}</span>
      </p>

      <div className={s.lista}>
        {dentro.bloques.map((b, i) => (
          <div className={`${s.item} fx`} style={{ "--i": i } as React.CSSProperties} key={b.titulo}>
            <p className={s.itemT}>{b.titulo}</p>
            <p className={s.itemD}>
              <span className="ph">{b.pendiente}</span>
            </p>
          </div>
        ))}
      </div>
    </Escena>
  );
}
