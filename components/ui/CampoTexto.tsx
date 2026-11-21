/**
 * Campo de formulario: sin caja, solo filete. La etiqueta siempre visible y el
 * subrayado que se dibuja al enfocar (ver base.css).
 */
export function CampoTexto({
  id,
  etiqueta,
  tipo = "text",
  pista,
  autoComplete,
  className,
}: {
  id: string;
  etiqueta: string;
  tipo?: string;
  pista?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={["campo", className].filter(Boolean).join(" ")}>
      <label htmlFor={id}>{etiqueta}</label>
      <div className="campo__wrap">
        <input id={id} name={id} type={tipo} placeholder={pista} autoComplete={autoComplete} />
        <span className="campo__u" />
      </div>
    </div>
  );
}

export function AreaTexto({
  id,
  etiqueta,
  pista,
  filas = 3,
}: {
  id: string;
  etiqueta: string;
  pista?: string;
  filas?: number;
}) {
  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      <div className="campo__wrap">
        <textarea id={id} name={id} rows={filas} placeholder={pista} />
        <span className="campo__u" />
      </div>
    </div>
  );
}
