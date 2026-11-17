import styles from "./Atmosphere.module.css";

/**
 * Textura y profundidad.
 *
 * Es lo que evita que el fondo oscuro se vea plano y barato: grano fino,
 * viñeteado y una luz de marca muy tenue arriba. Sin esto, un fondo oscuro
 * es solo un color; con esto, es un material.
 *
 * Todo decorativo: no recibe eventos ni lo ven los lectores de pantalla.
 */
export function Atmosphere() {
  return (
    <div className={styles.atmosphere} aria-hidden="true">
      <div className={styles.glow} />
      {/* Retícula visible, muy tenue. Es el recurso que más densidad
          editorial da por menos coste: la página deja de ser un vacío
          con texto flotando y pasa a tener estructura. */}
      <div className={styles.columns}>
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}

/**
 * Marco fijo de la ventana.
 *
 * Es la traducción "classy" del monitor de shader.se: el contenido vive
 * dentro de un objeto con bordes, no flotando en una página infinita.
 * Da densidad sin recurrir a lo vintage.
 */
export function Frame() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <span className={`${styles.mark} ${styles.tl}`} />
      <span className={`${styles.mark} ${styles.tr}`} />
      <span className={`${styles.mark} ${styles.bl}`} />
      <span className={`${styles.mark} ${styles.br}`} />
    </div>
  );
}
