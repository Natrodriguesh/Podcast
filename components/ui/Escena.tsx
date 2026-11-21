import type { ReactNode } from "react";
import type { Campo } from "@/lib/campos";
import s from "./Escena.module.css";

/**
 * Una escena es un entorno completo: ocupa pantalla, declara su campo de color
 * y centra su contenido sobre el eje de la página. El ritmo interno lo pone
 * cada escena; el eje y el aire los pone esto.
 */
export function Escena({
  id,
  campo,
  children,
  className,
  alto = "completa",
}: {
  id: string;
  campo: Campo;
  children: ReactNode;
  className?: string;
  /** `completa` ocupa pantalla; `suelta` se ajusta al contenido (pie). */
  alto?: "completa" | "suelta";
}) {
  return (
    <section
      id={id}
      data-campo={campo}
      className={[s.escena, alto === "suelta" && s.suelta, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`${s.dentro} wrap`}>{children}</div>
    </section>
  );
}

/**
 * Puente entre dos escenas: el tramo donde el color cambia. El logo se queda
 * dentro del corte y cambia de color al cruzarlo.
 */
export function Puente({ children }: { children: ReactNode }) {
  return (
    <div className={s.puente} aria-hidden="true">
      <div className={s.puenteDentro}>{children}</div>
    </div>
  );
}
