"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "./site";

/**
 * Qué sección está en pantalla, para marcarla en el menú.
 * Usa una banda estrecha en el centro del viewport: así el ítem activo
 * cambia cuando la sección ocupa la vista, no cuando asoma por el borde.
 */
export function useActiveSection(ids: SectionId[]) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    return () => io.disconnect();
  }, [ids]);

  return active;
}
