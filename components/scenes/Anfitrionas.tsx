import { Escena } from "@/components/ui/Escena";
import { Hueco } from "@/components/ui/Hueco";
import { anfitrionas } from "@/lib/site";
import s from "./scenes.module.css";

export function Anfitrionas() {
  return (
    <Escena id="anfitrionas" campo="hueso">
      <h2 className="ttl">
        <span className="rv">
          <span>{anfitrionas.titulo}</span>
        </span>
      </h2>

      <div className={s.personas}>
        {anfitrionas.personas.map((p, i) => (
          <div className={`${s.persona} fx`} style={{ "--i": i } as React.CSSProperties} key={p.nombre}>
            <Hueco
              forma={p.forma}
              ancho="min(70%, 240px)"
              src={p.foto ?? undefined}
              alt={p.foto ? `Retrato de ${p.nombre}` : ""}
            />
            <h3 className={s.personaN}>{p.nombre}</h3>
            <p className={s.personaR}>{p.rol}</p>
            <p className={s.personaT}>{p.texto}</p>
          </div>
        ))}
      </div>
    </Escena>
  );
}
