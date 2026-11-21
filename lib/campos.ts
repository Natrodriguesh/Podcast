/* ===========================================================================
   Equitea · campos de color
   Un campo es el entorno completo de una escena. El motor (Campo.tsx) no
   conoce ninguna escena: solo lee el campo que cada una declara y hace la
   transicion entre uno y el siguiente.
   =========================================================================== */

export type Campo = "hueso" | "rojo" | "amarillo";

/** Color de fondo de cada campo. */
export const FONDO: Record<Campo, string> = {
  hueso: "#FBF8F5",
  rojo: "#AD1925",
  amarillo: "#FFF0B5",
};

/** Color de texto sobre cada campo. Regla de marca: sobre rojo, blanco. */
export const TINTA: Record<Campo, string> = {
  hueso: "#3D0C10",
  rojo: "#FFFFFF",
  amarillo: "#7A1A20",
};

/** El logo solo existe en dos combinaciones: rojo sobre claro, amarillo sobre rojo. */
export const LOGO: Record<Campo, string> = {
  hueso: "#AD1925",
  rojo: "#FFF0B5",
  amarillo: "#AD1925",
};
