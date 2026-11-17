"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import styles from "./Loader.module.css";

const MIN_DURATION = 900; // suelo para que no dé un flashazo en conexiones rápidas

/**
 * Carga.
 *
 * Mide carga REAL (tipografías + recursos), no un temporizador falso.
 * Al terminar nada se desvanece: el telón sube y la línea que se acaba de
 * llenar sigue ahí arriba, convertida en la regla del header. Nada
 * aparece ni desaparece — se transforma. Los cortes son lo que abarata.
 */
export function Loader() {
  const [progress, setProgress] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.dataset.loading = "true";

    const started = performance.now();
    let frame = 0;
    let ready = false;

    const markReady = () => {
      ready = true;
    };

    // Carga real: tipografías listas + recursos de la página
    const fonts = document.fonts?.ready ?? Promise.resolve();
    Promise.all([
      fonts,
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true })),
    ]).then(markReady);

    // Red a prueba de fallos: si algo no resuelve, no dejamos a nadie encerrado
    const failsafe = window.setTimeout(markReady, 6000);

    const tick = () => {
      const elapsed = performance.now() - started;
      const floor = Math.min(1, elapsed / MIN_DURATION);

      setProgress((current) => {
        // Avanza hacia 90% mientras carga; sólo llega a 100 cuando está listo
        const ceiling = ready && floor >= 1 ? 1 : 0.9;
        const next = current + (ceiling - current) * 0.06;
        return next > 0.999 ? 1 : next;
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(failsafe);
    };
  }, []);

  useEffect(() => {
    if (progress < 1 || lifting) return;

    const lift = window.setTimeout(() => setLifting(true), 260);
    return () => window.clearTimeout(lift);
  }, [progress, lifting]);

  useEffect(() => {
    if (!lifting) return;

    document.body.dataset.loading = "false";
    const remove = window.setTimeout(() => setGone(true), 1400);
    return () => window.clearTimeout(remove);
  }, [lifting]);

  if (gone) return null;

  const percent = Math.round(progress * 100);

  return (
    <div
      className={`${styles.loader} ${lifting ? styles.lifting : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Cargando, ${percent} por ciento`}
    >
      {/* La línea. Vive en el borde superior, exactamente donde quedará
          la regla del header: por eso la transición es literal. */}
      <div className={styles.track}>
        <div className={styles.fill} style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className={styles.center}>
        <span className={styles.wordmark}>{site.name}</span>
        <span className={styles.tagline}>{site.tagline}</span>
      </div>

      <div className={styles.meter}>
        <span className="label">Cargando</span>
        <span className={styles.percent}>{String(percent).padStart(3, "0")}</span>
      </div>
    </div>
  );
}
