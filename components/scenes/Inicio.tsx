import { Logo } from "@/components/brand/Logo";
import { Sticker } from "@/components/brand/Sticker";
import { Escena } from "@/components/ui/Escena";
import { cta, inicio, marca } from "@/lib/site";
import e from "@/components/ui/Escena.module.css";
import s from "./scenes.module.css";

export function Inicio() {
  return (
    <Escena id="inicio" campo="rojo" className={s.hero}>
      <div className={`${s.tituloLogo} fx`}>
        <Logo variante="completo" ancho="min(76vw, 520px)" titulo="Equitea Podcast" />
      </div>

      <h1 className="ttl">
        {marca.lema.map((linea, i) => (
          <span className="rv" style={{ "--i": i } as React.CSSProperties} key={linea}>
            <span>{linea}</span>
          </span>
        ))}
      </h1>

      <p className="lead fx" style={{ "--i": 2 } as React.CSSProperties}>
        {marca.entrada}
      </p>

      <Sticker
        nombre="si-teniamos-que-ser-solo-mujeres"
        texto="Sí, teníamos que ser solo mujeres"
        className="fx"
      />

      <div className={`${e.acto} fx`} style={{ "--i": 3 } as React.CSSProperties}>
        <a className="btn" href={`#${cta.id}`}>
          {inicio.acciones.principal}
        </a>
      </div>
    </Escena>
  );
}
