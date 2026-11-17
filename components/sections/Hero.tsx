"use client";

import { hero } from "@/lib/site";
import { useInView } from "@/lib/useInView";
import { Lines } from "@/components/ui/Lines";
import styles from "./sections.module.css";

/**
 * Portada.
 *
 * Aquí no pasa nada: el impacto es tipográfico. Una display de 7rem bien
 * compuesta no necesita ayuda — moverla la empequeñece.
 */
export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0);

  return (
    <header id="top" ref={ref} data-inview={inView} className={styles.hero}>
      <div className="shell">
        <p className={`label reveal ${styles.eyebrow}`}>{hero.eyebrow}</p>

        <Lines as="h1" lines={hero.title} className={`display ${styles.heroTitle}`} />

        <div className={styles.heroFoot}>
          <p className="lead reveal" style={{ "--i": 3 } as React.CSSProperties}>
            {hero.support}
          </p>

          <a
            href="#solicitud"
            className={`reveal ${styles.heroCta}`}
            style={{ "--i": 4 } as React.CSSProperties}
          >
            {hero.cta}
          </a>
        </div>
      </div>

      <span className={`label ${styles.scrollHint}`}>{hero.scrollHint}</span>
    </header>
  );
}
