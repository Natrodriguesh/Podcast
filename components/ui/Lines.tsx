import styles from "./Lines.module.css";

type Props = {
  lines: readonly string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

/**
 * Revelado por líneas con máscara.
 *
 * Cada línea sube desde detrás de un borde invisible, escalonada.
 * Nunca letra por letra: eso está quemado y lee a 2021.
 */
export function Lines({ lines, className = "", as: Tag = "h2" }: Props) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={line} className={`reveal-mask ${styles.line}`}>
          <span style={{ "--i": index } as React.CSSProperties}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
