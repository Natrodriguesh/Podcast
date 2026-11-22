import { Escena } from "@/components/ui/Escena";
import { dentro } from "@/lib/site";
import s from "./scenes.module.css";

export function Dentro() {
  return (
    <Escena id="dentro" campo="amarillo">
      <h2 className="ttl">
        <span className="rv">
          <span>{dentro.titulo}</span>
        </span>
      </h2>

      <div className={s.lista}>
        {dentro.bloques.map((b, i) => (
          <div className={`${s.item} fx`} style={{ "--i": i } as React.CSSProperties} key={b.titulo}>
            <p className={s.itemT}>{b.titulo}</p>
            <p className={s.itemD}>{b.texto}</p>
          </div>
        ))}
      </div>
    </Escena>
  );
}
