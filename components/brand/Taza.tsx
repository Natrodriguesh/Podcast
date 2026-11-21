/**
 * Taza. Elemento grafico propio de Equitea (grupo Icons del design system,
 * coffee.svg, Phosphor duotono). Marca de escena y relleno de los huecos de
 * foto mientras no hay fotografia.
 */
export function Taza({ ancho = "40px", className }: { ancho?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      style={{ width: ancho, height: "auto", display: "block" }}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M208,88v48a88,88,0,0,1-51.3,80H83.3A88,88,0,0,1,32,136V88Z" opacity="0.2" />
      <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z" />
    </svg>
  );
}

/**
 * Comillas gigantes. Elemento grafico `BigQuote` del design system.
 * Solo para citas reales de invitadas u oyentes.
 */
export function Comillas({ ancho = "48px" }: { ancho?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      style={{ width: ancho, height: "auto", display: "block" }}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M108,72v72H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60A8,8,0,0,1,108,72Zm108-8H156a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h68V72A8,8,0,0,0,216,64Z" opacity="0.2" />
      <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z" />
    </svg>
  );
}
