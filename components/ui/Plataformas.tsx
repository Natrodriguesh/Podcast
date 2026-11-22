import { plataformas } from "@/lib/site";
import s from "./Plataformas.module.css";

/**
 * Dónde se escucha. Son las marcas oficiales monocromas de cada plataforma,
 * pintadas como máscara para que tomen el color del campo: blancas sobre
 * rojo, tinta sobre claro. Las cuatro publican variante en blanco y en
 * negro, así que no se sale de lo que cada marca permite.
 *
 * La proporción de cada archivo va aquí para alinearlas por altura, que es
 * como se comparan dos logotipos, no por ancho.
 */
const RATIO: Record<string, number> = {
  spotify: 3.3145,
  "apple-podcasts": 5.3545,
  youtube: 4.4365,
  "amazon-music": 5.0948,
};

export function Plataformas() {
  return (
    <ul className={s.fila} aria-label="Dónde escuchar">
      {plataformas.map((p) => {
        const marca = (
          <span
            className={s.marca}
            role="img"
            aria-label={p.nombre}
            style={
              {
                aspectRatio: String(RATIO[p.archivo] ?? 4),
                "--src": `url(/plataformas/${p.archivo}.png)`,
              } as React.CSSProperties
            }
          />
        );
        return (
          <li key={p.archivo}>
            {p.url ? (
              <a href={p.url} className={s.enlace}>
                {marca}
              </a>
            ) : (
              marca
            )}
          </li>
        );
      })}
    </ul>
  );
}
