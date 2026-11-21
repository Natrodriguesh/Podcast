import { Logo } from "@/components/brand/Logo";
import { Escena } from "@/components/ui/Escena";
import { cta, inicio, marca } from "@/lib/site";
import s from "./scenes.module.css";

export function Inicio() {
  return (
    <Escena id="inicio" campo="hueso" className={s.hero}>
      <div className={`${s.heroLogo} fx`}>
        <Logo ancho="min(74vw, 520px)" titulo="Equitea Podcast" />
      </div>

      <h1 className={s.heroLema}>
        {marca.lema.map((linea, i) => (
          <span className="rv" style={{ "--i": i } as React.CSSProperties} key={linea}>
            <span>{linea}</span>
          </span>
        ))}
      </h1>

      <p className={`${s.heroSub} fx`} style={{ "--i": 2 } as React.CSSProperties}>
        {marca.significado}
      </p>

      <div className={`${s.heroActos} fx`} style={{ "--i": 3 } as React.CSSProperties}>
        <a className="btn" href={`#${cta.id}`}>
          {inicio.acciones.principal}
        </a>
        <a className="lnk" href="#podcast">
          {inicio.acciones.secundaria}
        </a>
      </div>

      <div className={`${s.filete} filete`} aria-hidden="true" />

      <p className={`${s.lab} fx`} style={{ "--i": 4 } as React.CSSProperties}>
        {inicio.indice.join("  ·  ")}
      </p>
    </Escena>
  );
}
