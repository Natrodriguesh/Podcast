/* ===========================================================================
   Equitea · contenido
   Todo el texto de la página vive aquí, fuera del JSX. Para cambiar una
   frase no hay que tocar un componente.

   `pendiente` = texto que todavía no existe. Se marca en pantalla con un
   subrayado punteado y se sustituye por el real cuando llegue.
   =========================================================================== */

export const marca = {
  nombre: "Equitea",
  lema: ["Mujeres que emprenden,", "invierten y lideran."],
  significado:
    "Equi, de equilibrio y equidad. Tea, el té y también el chisme. Conversaciones sin prisa, una taza cada vez.",
} as const;

/** Orden del menú; coincide con el orden de las escenas. */
export const menu = [
  { id: "comunidad", texto: "La comunidad" },
  { id: "dentro", texto: "Qué pasa dentro" },
  { id: "podcast", texto: "El podcast" },
] as const;

export const cta = { id: "solicitud", texto: "Solicitar entrada" } as const;

export const inicio = {
  acciones: {
    principal: "Solicitar entrada",
    secundaria: "Conoce el podcast",
  },
  indice: ["La comunidad, abierta", "El podcast, enero"],
} as const;

export const comunidad = {
  titulo: { antes: "Equitea ", marcada: "Comunidad" },
  entrada: {
    pendiente:
      "Qué es la comunidad de Equitea y por qué existe: dos o tres frases que la definan.",
  },
  columnas: [
    {
      pendiente:
        "Para quién es. A quién le sirve entrar: en qué momento está, qué está construyendo, qué busca.",
    },
    {
      pendiente:
        "Y para quién no. Qué no es esta comunidad, para que la solicitud llegue bien filtrada.",
    },
  ],
} as const;

export const dentro = {
  titulo: "Qué pasa dentro",
  entrada: { pendiente: "Una frase que resuma la vida de la comunidad." },
  bloques: [
    { titulo: "Encuentros", pendiente: "Cada cuánto, en qué formato y en qué ciudad." },
    { titulo: "Acceso", pendiente: "A qué da acceso: invitadas, inversoras, oportunidades." },
    { titulo: "Conversación", pendiente: "Dónde pasa el día a día de la comunidad." },
  ],
} as const;

export const solicitud = {
  titulo: "Solicitar entrada",
  entrada: { antes: "Leemos todas las solicitudes. ", pendiente: "Plazo de respuesta." },
  campos: [
    { id: "nombre", etiqueta: "Nombre y apellido", tipo: "text", pista: "Cómo te llamas", autoComplete: "name" },
    { id: "correo", etiqueta: "Correo", tipo: "email", pista: "tu@correo.com", autoComplete: "email" },
    { id: "que", etiqueta: "Qué construyes", tipo: "text", pista: "Empresa, fondo o proyecto" },
    { id: "enlace", etiqueta: "Enlace", tipo: "url", pista: "LinkedIn o web" },
  ],
  mensaje: { id: "porque", etiqueta: "Por qué quieres entrar", pista: "Cuéntanos en corto" },
  enviar: "Enviar solicitud",
  hecho: {
    titulo: "Solicitud recibida",
    antes: "Te escribimos a tu correo. ",
    pendiente: "Plazo de respuesta.",
  },
} as const;

export const podcast = {
  titulo: { antes: "Equitea ", marcada: "Podcast" },
  entrada:
    "Un podcast de inversión, startups y negocio. Conversaciones con founders e inversoras que ya llegaron: mujeres que construyeron algo y lo sostienen.",
  origenes: ["Arabia Saudí", "China", "Latinoamérica", "España"],
  cita: { pendiente: "Una cita real de una invitada va aquí.", quien: "Quién la dijo" },
  aviso: {
    texto: "Temporada 1, enero. Déjanos tu correo y te avisamos del estreno.",
    etiqueta: "Correo",
    pista: "tu@correo.com",
    boton: "Avísame",
    hecho: "Anotado",
  },
} as const;

export const anfitrionas = {
  titulo: "Quién está detrás",
  personas: [
    {
      nombre: "Natalia Rodríguez",
      rol: "Founder y host",
      pendiente: "Una línea sobre Nat: desde dónde pregunta.",
      forma: "cuenco" as const,
    },
    {
      nombre: "Rocío Andrada",
      rol: "Co-host y directora creativa",
      pendiente: "Una línea sobre Ro: desde dónde pregunta.",
      forma: "arco" as const,
    },
  ],
} as const;

export const pie = {
  lema: "Mujeres que emprenden, invierten y lideran.",
  contacto: { antes: "Invitadas y patrocinadores: ", pendiente: "correo" },
  copyright: "© 2026 Equitea",
} as const;
