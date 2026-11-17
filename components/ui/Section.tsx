"use client";

import { useInView } from "@/lib/useInView";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  number: string;
  label: string;
  children: React.ReactNode;
  /** La sección se queda fija mientras su contenido avanza. Úsalo con cuenta:
   *  si todas las secciones se clavan, la página se siente pesada. */
  sticky?: boolean;
};

/**
 * Envoltorio de sección.
 *
 * Aporta el número y la etiqueta en el margen — el recurso que más dice
 * "editorial" por menos esfuerzo — y dispara las animaciones de entrada
 * cuando la sección aparece.
 */
export function Section({ id, number, label, children, sticky = false }: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.15);

  return (
    <section
      id={id}
      ref={ref}
      data-inview={inView}
      className={`section ${styles.section} ${sticky ? styles.sticky : ""}`}
    >
      <div className="shell">
        <div className={styles.head}>
          <span className="label">{number}</span>
          <span className={`rule ${styles.headRule} rule-draw`} />
          <span className="label">{label}</span>
        </div>

        {children}
      </div>
    </section>
  );
}
