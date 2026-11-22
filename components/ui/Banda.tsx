import s from "./Banda.module.css";

/**
 * Banda a sangre pegada al borde inferior de la escena, recortada por él.
 * Es como Nat ha usado antes el mockup de micrófonos: la imagen no se
 * presenta entera, se asoma.
 */
export function Banda({ src, alt = "", ancho = "min(100%, 1400px)" }: {
  src: string;
  alt?: string;
  ancho?: string;
}) {
  return (
    <div className={s.banda} aria-hidden={alt ? undefined : true}>
      <img src={src} alt={alt} style={{ width: ancho }} />
    </div>
  );
}
