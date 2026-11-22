import { Escena } from "@/components/ui/Escena";
import { Hueco } from "@/components/ui/Hueco";
import { comunidad, cta } from "@/lib/site";
import e from "@/components/ui/Escena.module.css";

export function Comunidad() {
  return (
    <Escena id="comunidad" campo="rojo">
      <h2 className="ttl">
        <span className="rv">
          <span>{comunidad.titulo}</span>
        </span>
      </h2>

      {comunidad.parrafos.map((p, i) => (
        <p className="lead fx" style={{ "--i": i } as React.CSSProperties} key={p.slice(0, 24)}>
          {p}
        </p>
      ))}

      <p className="destacado fx">
        {comunidad.destacado.antes}
        <em>{comunidad.destacado.marcado}</em>.
      </p>

      <Hueco forma="arco" />

      <div className={`${e.acto} fx`}>
        <a className="btn" href={`#${cta.id}`}>
          {cta.texto}
        </a>
      </div>
    </Escena>
  );
}
