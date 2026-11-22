import { Escena } from "@/components/ui/Escena";
import { Composicion } from "@/components/ui/Composicion";
import { comunidad, cta, fotos } from "@/lib/site";
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

      <div className="fx">
        <Composicion
          principal={fotos.circulo.src}
          altPrincipal={fotos.circulo.alt}
          encima={fotos.chat.src}
          altEncima={fotos.chat.alt}
        />
      </div>

      <p className="destacado fx">
        {comunidad.destacado.antes}
        <em>{comunidad.destacado.marcado}</em>.
      </p>

      <div className={`${e.acto} fx`}>
        <a className="btn" href={`#${cta.id}`}>
          {cta.texto}
        </a>
      </div>
    </Escena>
  );
}
