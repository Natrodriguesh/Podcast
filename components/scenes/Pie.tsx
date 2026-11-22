import { Logo } from "@/components/brand/Logo";
import { pie } from "@/lib/site";
import e from "@/components/ui/Escena.module.css";
import s from "./scenes.module.css";

export function Pie() {
  return (
    <footer id="pie" data-campo="amarillo" className={`${e.escena} ${e.suelta}`}>
      <div className={`${e.dentro} wrap`}>
        <div className={`${s.pieLogo} fx`}>
          <Logo variante="completo" ancho="170px" titulo="Equitea Podcast" />
        </div>
        <p className={`${s.pieMeta} fx`}>
          <span>{pie.lema}</span>
          <span>
            {pie.contacto.antes}
            {pie.contacto.correo}
          </span>
          <span>{pie.copyright}</span>
        </p>
      </div>
    </footer>
  );
}
