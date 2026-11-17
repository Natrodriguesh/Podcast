/* =========================================================================
   CONTENIDO
   Todo el texto de la web vive aquí, fuera de los componentes.
   Para cambiar copy no hay que tocar ni una línea de JSX.

   ⚠️  TODO EL TEXTO ES MARCADOR DE POSICIÓN.
   Está escrito para que la maquetación tenga longitudes realistas.
   ========================================================================= */

export const site = {
  name: "EQUITEA",
  tagline: "Comunidad",
  /* Marcador: el nombre va como logotipo tipográfico hasta que exista el logo */
} as const;

export type SectionId = "que-es" | "dentro" | "quien" | "entrar";

export const nav: { id: SectionId; label: string }[] = [
  { id: "que-es", label: "Qué es" },
  { id: "dentro", label: "Dentro" },
  { id: "quien", label: "Quién" },
  { id: "entrar", label: "Entrar" },
];

export const hero = {
  eyebrow: "Comunidad privada · Español",
  /* Los saltos de línea se deciden a mano: en editorial, dónde rompe una
     línea es decisión de diseño, no del ancho del navegador. */
  title: ["El sitio donde las mujeres", "que construyen", "dejan de hacerlo solas."],
  support:
    "Un grupo reducido de fundadoras, directivas y profesionales que comparten lo que de verdad pasa dentro de sus proyectos.",
  cta: "Solicitar plaza",
  scrollHint: "Desplázate",
};

export const what = {
  number: "01",
  label: "Qué es",
  title: "No es una red de contactos. Es un sitio donde hablar claro.",
  body: [
    "Las comunidades de networking te dan tarjetas. Esta te da contexto: las conversaciones que no caben en LinkedIn, las cifras reales, las decisiones difíciles y los errores que nadie publica.",
    "Se entra por solicitud y el grupo se mantiene pequeño a propósito. La confianza no escala.",
  ],
};

export const inside = {
  number: "02",
  label: "Qué pasa dentro",
  title: "Tres cosas, y nada más.",
  pillars: [
    {
      n: "I",
      title: "Encuentros en petit comité",
      body: "Una sesión al mes, máximo doce personas, con un caso real sobre la mesa. Sin ponencias y sin público.",
    },
    {
      n: "II",
      title: "Archivo vivo",
      body: "Plantillas, cifras y documentos reales que las miembros comparten. Lo que normalmente cuesta años conseguir.",
    },
    {
      n: "III",
      title: "Acceso directo",
      body: "Un canal donde preguntar hoy y tener respuesta de alguien que ya pasó por ahí.",
    },
  ],
};

export const founder = {
  number: "03",
  label: "Quién está detrás",
  title: "Llevo años teniendo esta conversación en privado.",
  body: [
    "Marcador de posición para tu historia: por qué montas esto, qué te cualifica y qué te hizo pensar que hacía falta.",
    "Tres frases, no más. Aquí la credibilidad la da la concreción, no la extensión.",
  ],
  credit: "Fundadora",
};

export const join = {
  number: "04",
  label: "Cómo entrar",
  title: "Qué pasa cuando envías la solicitud.",
  /* Esto va ANTES del formulario. Nadie rellena nada sin saber qué viene detrás. */
  steps: [
    { n: "01", title: "Solicitas", body: "Cinco minutos. Puedes guardar y volver." },
    { n: "02", title: "Revisamos", body: "Leemos todas las solicitudes una vez al mes." },
    { n: "03", title: "Te respondemos", body: "Siempre, aunque la respuesta sea que no." },
  ],
  note: "Marcador: aquí van las condiciones reales — si hay cuota, cuánto, y cada cuánto se abren plazas.",
};

export const apply = {
  number: "05",
  label: "Solicitud",
  title: "Solicita tu plaza.",
  support: "Cinco minutos. Revisamos las solicitudes una vez al mes y respondemos siempre.",
  fields: [
    { name: "nombre", label: "Nombre y apellidos", type: "text", autoComplete: "name" },
    { name: "email", label: "Correo electrónico", type: "email", autoComplete: "email" },
    { name: "proyecto", label: "Tu proyecto o cargo", type: "text", autoComplete: "organization" },
    { name: "enlace", label: "Un enlace (web o LinkedIn)", type: "url", autoComplete: "url" },
  ],
  textarea: {
    name: "motivo",
    label: "¿Qué estás construyendo ahora mismo?",
    hint: "Dos o tres líneas bastan.",
  },
  submit: "Enviar solicitud",
};
