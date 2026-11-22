import s from "./Hueco.module.css";

export type Forma = "arco" | "cuenco" | "medio";

/**
 * Hueco de fotografía, recortado en una de las formas de taza del sistema.
 * Mientras no hay foto se ve el campo de color por dentro: la página está
 * completa hoy y las fotos entran después sin mover nada.
 *
 * Pasar `src` lo convierte en la foto de verdad.
 */
export function Hueco({
  forma = "arco",
  ancho = "min(74%, 340px)",
  src,
  alt = "",
}: {
  forma?: Forma;
  ancho?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div className={s.caja} style={{ width: ancho }}>
      <div className={`${s.hueco} ${s[forma]}`}>
        {src ? <img src={src} alt={alt} /> : null}
      </div>
    </div>
  );
}
