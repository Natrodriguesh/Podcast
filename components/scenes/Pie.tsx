import { Logo } from "@/components/brand/Logo";
import { pie } from "@/lib/site";
import s from "./scenes.module.css";
import e from "@/components/ui/Escena.module.css";

export function Pie() {
  return (
    <footer id="pie" data-campo="amarillo" className={`${e.escena} ${e.suelta}`}>
      <div className={`${e.dentro} wrap`}>
        <div className={`${s.pieLogo} fx`}>
          <Logo ancho="150px" />
        </div>

        <div className={`${s.filete} filete`} aria-hidden="true" />

        <p className={`${s.pieMeta} fx`}>
          <span>{pie.lema}</span>
          <span>
            {pie.contacto.antes}
            <span className="ph">{pie.contacto.pendiente}</span>
          </span>
          <span>{pie.copyright}</span>
        </p>
      </div>
    </footer>
  );
}
