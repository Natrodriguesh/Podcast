import s from "./Cinta.module.css";

/**
 * Cinta que corre de borde a borde con una frase repetida. Es la pieza que
 * marca el cambio de acto: una antes de la comunidad y otra antes del podcast.
 *
 * El recorrido es exactamente la mitad de la pista, y la pista lleva el texto
 * dos veces, así que el bucle no tiene costura.
 * Con "reducir movimiento" se queda quieta.
 */
export function Cinta({
  texto,
  sobre = "hueso",
}: {
  texto: string;
  /** Campo sobre el que cae: decide si la cinta es amarilla o roja. */
  sobre?: "hueso" | "rojo" | "amarillo";
}) {
  const veces = 4;
  return (
    <div className={s.cinta} data-sobre={sobre} aria-label={texto}>
      <div className={s.pista}>
        {Array.from({ length: veces }, (_, i) => (
          <span key={i}>{texto}</span>
        ))}
        {Array.from({ length: veces }, (_, i) => (
          <span key={`eco-${i}`} aria-hidden="true">
            {texto}
          </span>
        ))}
      </div>
    </div>
  );
}
