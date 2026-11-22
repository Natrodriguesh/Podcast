import { plataformas } from "@/lib/site";
import s from "./Plataformas.module.css";

/**
 * Dónde se escucha. De momento son los nombres puestos en la tipografía del
 * sistema: los logotipos oficiales de cada plataforma son archivos suyos y
 * no los dibujo a mano. Cuando estén en `public/plataformas/` se cambian
 * aquí sin tocar nada más.
 */
export function Plataformas() {
  return (
    <ul className={s.fila} aria-label="Dónde escuchar">
      {plataformas.map((p) => (
        <li key={p.nombre}>
          {p.url ? (
            <a className="lnk" href={p.url}>
              {p.nombre}
            </a>
          ) : (
            <span>{p.nombre}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
