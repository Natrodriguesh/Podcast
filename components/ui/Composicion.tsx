import s from "./Composicion.module.css";

/**
 * Dos imágenes jugando entre ellas en lugar de una puesta de frente: la
 * grande recortada en arco y la segunda encima, más pequeña, girada y
 * saliéndose de su esquina. En pantalla estrecha se apilan sin solape.
 *
 * Sin foto principal se queda solo la segunda, centrada y a mayor tamaño:
 * mejor una pieza sola bien puesta que un hueco esperando.
 */
export function Composicion({
  principal,
  altPrincipal,
  encima,
  altEncima,
}: {
  principal?: string | null;
  altPrincipal?: string;
  encima: string;
  altEncima: string;
}) {
  if (!principal) {
    return (
      <div className={s.sola}>
        <img src={encima} alt={altEncima} />
      </div>
    );
  }

  return (
    <div className={s.caja}>
      <div className={s.arco}>
        <img src={principal} alt={altPrincipal} />
      </div>
      <div className={s.encima}>
        <img src={encima} alt={altEncima} />
      </div>
    </div>
  );
}
