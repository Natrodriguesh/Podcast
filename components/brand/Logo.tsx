import { LOGO_SPRITE, LOGO_VIEWBOX, MARCA_VIEWBOX } from "./logo-sprite";

/**
 * Hoja del logotipo. Va una sola vez en el layout; después cualquier <Logo />
 * lo referencia con <use>. Así el SVG pesa una vez y hereda currentColor.
 */
export function LogoSprite() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: LOGO_SPRITE }}
    />
  );
}

type Props = {
  /** `marca` es EQUITEA solo; `completo` lleva PODCAST debajo. */
  variante?: "marca" | "completo";
  /** Ancho CSS. La altura sale de la proporción del logo. */
  ancho?: string;
  /** Texto alternativo. Sin él, el logo es decorativo. */
  titulo?: string;
  className?: string;
};

export function Logo({ variante = "marca", ancho = "120px", titulo, className }: Props) {
  const esMarca = variante === "marca";
  return (
    <svg
      viewBox={esMarca ? MARCA_VIEWBOX : LOGO_VIEWBOX}
      className={className}
      style={{ width: ancho, height: "auto", display: "block" }}
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      focusable="false"
    >
      <use href={esMarca ? "#eqMarca" : "#eqLogo"} />
    </svg>
  );
}
