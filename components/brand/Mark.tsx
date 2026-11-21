/**
 * Mark: el subrayado a mano del design system. Una palabra por titular, nunca
 * mas. El trazo se dibuja solo cuando la escena entra (ver motion.css).
 */
export function Mark({ children, variante = 0 }: { children: React.ReactNode; variante?: 0 | 1 }) {
  const trazos = [
    "M2 8.4C34 3.2 70 2.4 101 4.6c31 2.1 66 3.4 97 .9",
    "M3 7.6C36 2.8 72 2.2 103 4.4c30 2.1 64 3.6 94 1.4",
  ];
  return (
    <span className="mark">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d={trazos[variante]} />
      </svg>
    </span>
  );
}
