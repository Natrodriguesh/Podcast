"use client";

import { nav, site, hero } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { useScrollProgress } from "@/lib/useScrollProgress";
import styles from "./Header.module.css";

const ids = nav.map((item) => item.id);

/**
 * Header fijo.
 *
 * Cuatro anclas y el botón de solicitud, que lleva al formulario desde
 * cualquier punto: así nadie tiene que bajar hasta el final para convertir.
 * El "About" no es una página — es la sección 03 de este mismo scroll.
 */
export function Header() {
  const active = useActiveSection(ids);
  const progress = useScrollProgress();

  return (
    <>
      {/* La línea que venía de la carga: ahora mide el progreso de lectura */}
      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressFill} style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className={styles.header}>
        <div className={styles.inner}>
          <a href="#top" className={styles.wordmark}>
            {site.name}
          </a>

          <nav className={styles.nav} aria-label="Secciones">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${active === item.id ? styles.navLinkActive : ""}`}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#solicitud" className={styles.cta}>
            {hero.cta}
          </a>
        </div>
      </header>
    </>
  );
}
