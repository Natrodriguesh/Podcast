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

    return () => {
      window.clearTimeout(t);
      observador.disconnect();
    };
  }, []);

  return null;
}
