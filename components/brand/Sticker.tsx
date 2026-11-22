import s from "./Sticker.module.css";

/**
 * Stickers de caligrafía. Los archivos de `public/stickers` llevan la tinta
 * roja, así que sobre un campo rojo desaparecerían. Se pintan como máscara
 * y el color lo pone la escena (`--sticker`): rojo de marca sobre claro,
 * amarillo sobre rojo. Un solo archivo sirve para los tres campos.
 *
 * La proporción de cada uno viene del archivo, para reservar su sitio antes
 * de que la imagen llegue y que nada salte.
 */
const STICKERS = {
  girlllll: 402 / 195,
  mugerrrr: 573 / 185,
  gurllll: 397 / 195,
  "gloss-margin": 1174 / 301,
  "girls-just-want-to-have-funds": 1186 / 533,
  "si-teniamos-que-ser-solo-mujeres": 1524 / 193,
} as const;

export type NombreSticker = keyof typeof STICKERS;

export function Sticker({
  nombre,
  texto,
  ancho = "min(66vw, 460px)",
  className,
}: {
  nombre: NombreSticker;
  /** Lo que dice, para quien no ve la imagen. */
  texto: string;
  ancho?: string;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={texto}
      className={[s.sticker, className].filter(Boolean).join(" ")}
      style={
        {
          width: ancho,
          aspectRatio: String(STICKERS[nombre]),
          "--src": `url(/stickers/${nombre}.png)`,
        } as React.CSSProperties
      }
    />
  );
}
