import { LOGO_SPRITE, LOGO_VIEWBOX } from "./logo-sprite";

/**
 * Hoja del logotipo. Va una sola vez en el layout; despues cualquier <Logo />
 * lo referencia con <use>. Asi el SVG pesa una vez y hereda currentColor.
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
  /** Ancho CSS. La altura sale de la proporcion del logo. */
  ancho?: string;
  /** Texto alternativo. Sin el, el logo es decorativo. */
  titulo?: string;
  className?: string;
};

export function Logo({ ancho = "120px", titulo, className }: Props) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      style={{ width: ancho, height: "auto", display: "block" }}
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      focusable="false"
    >
      <use href="#eqLogo" />
    </svg>
  );
}
