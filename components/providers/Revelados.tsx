"use client";

import { useEffect } from "react";

/**
 * Un solo observador para todos los revelados de la página. Cada elemento con
 * .fx, .rv o .filete recibe .dentro cuando entra, y se deja de observar.
 *
 * Lo que ya está en pantalla al arrancar se revela de inmediato, para que la
 * primera vista nunca aparezca en blanco.
 */
export function Revelados() {
  useEffect(() => {
    const selector = ".fx, .rv, .filete";

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("dentro");
          observador.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
    );

    document.querySelectorAll(selector).forEach((n) => observador.observe(n));

    const abrirLoVisible = () => {
      document.querySelectorAll(selector).forEach((n) => {
        if (n.getBoundingClientRect().top < window.innerHeight * 0.92) {
          n.classList.add("dentro");
        }
      });
    };
    const t = window.setTimeout(abrirLoVisible, 60);

    /* El margen negativo adelanta el revelado, pero deja una franja al final
       del documento a la que no se puede llegar scrolleando: lo último de la
       página se quedaría escondido para siempre. Al tocar fondo se abre todo
       lo que quede. */
    const alFondo = () => {
      const resto = window.document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      if (resto > 4) return;
      document.querySelectorAll(selector).forEach((n) => n.classList.add("dentro"));
    };
    window.addEventListener("scroll", alFondo, { passive: true });
    window.addEventListener("resize", alFondo, { passive: true });
    alFondo();

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", alFondo);
      window.removeEventListener("resize", alFondo);
      observador.disconnect();
    };
  }, []);

  return null;
}
