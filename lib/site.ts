/* ===========================================================================
   Equitea · contenido

   ⚠️  TODO EL TEXTO DE ESTE ARCHIVO ES DE RELLENO.
   Lo escribí yo para poder ver el diseño con párrafos de verdad en lugar de
   huecos. No es la voz de Equitea y no debe publicarse como definitivo:
   se sustituye frase a frase cuando llegue el texto real. Fuera de aquí no
   hay texto en ningún componente, así que cambiarlo no toca el diseño.
   =========================================================================== */

export const marca = {
  nombre: "Equitea",
  lema: ["Mujeres que emprenden,", "invierten y lideran."],
  entrada:
    "Equitea empezó como una conversación entre dos amigas sobre dinero, negocio y todo lo que nadie te cuenta mientras estás construyendo algo. Hoy es un podcast y una comunidad de mujeres que ya están dentro del juego.",
} as const;

/** Orden del menú; coincide con el orden de las escenas. */
export const menu = [
  { id: "comunidad", texto: "La comunidad" },
  { id: "dentro", texto: "Qué pasa dentro" },
  { id: "podcast", texto: "El podcast" },
] as const;

export const cta = { id: "solicitud", texto: "Solicitar entrada" } as const;

export const cintas = {
  comunidad: "Únete a la comunidad",
  podcast: "Primera temporada en enero",
} as const;

export const inicio = {
  acciones: { principal: "Solicitar entrada", secundaria: "Conoce el podcast" },
} as const;

export const comunidad = {
  titulo: "La comunidad",
  parrafos: [
    "Un grupo cerrado de founders, inversoras y mujeres que dirigen. Nos juntamos a hablar de lo que normalmente se habla a puerta cerrada: rondas, valoraciones, socios, despidos, márgenes, y lo que cuesta sostener una empresa cuando además sostienes todo lo demás.",
    "Si levantaste capital o estás a punto de hacerlo, si tienes un negocio que ya factura, o si inviertes tu dinero o el de otros, este es tu sitio. Si todavía estás en la idea, te vamos a servir más dentro de un año, y te lo decimos antes para no hacerte perder el tiempo.",
  ],
  destacado: { antes: "No es una red de contactos. Es un sitio donde puedes decir ", marcado: "la verdad sobre tu negocio" },
} as const;

export const dentro = {
  titulo: "Qué pasa dentro",
  bloques: [
    {
      titulo: "Encuentros",
      texto:
        "Una vez al mes, en grupos pequeños y sin que nadie presente nada. Una pregunta sobre la mesa y tiempo para contestarla bien. En Barcelona y Madrid de momento, y en remoto para las que están fuera.",
    },
    {
      titulo: "Acceso",
      texto:
        "Las invitadas del podcast entran al grupo antes de que salga su episodio. Lo que no se puede contar delante de un micrófono se cuenta aquí.",
    },
    {
      titulo: "Conversación",
      texto:
        "Un canal privado donde se pregunta sin rodeos y se responde con cifras. Nadie vende nada y nadie da charlas.",
    },
  ],
} as const;

export const solicitud = {
  titulo: "Solicitar entrada",
  entrada:
    "Leemos todas las solicitudes y respondemos en una semana. Preguntamos poco, pero lo que preguntamos lo leemos de verdad: queremos saber qué estás construyendo y por qué este grupo te sirve ahora y no dentro de dos años.",
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
    texto: "Te escribimos a tu correo en una semana.",
  },
} as const;

/** Dónde se escucha. `url` vacía = todavía no hay enlace. */
export const plataformas = [
  { nombre: "Spotify", url: "" },
  { nombre: "Apple Podcasts", url: "" },
  { nombre: "YouTube", url: "" },
  { nombre: "Amazon Music", url: "" },
] as const;

export const fotos = {
  circulo: { src: "/fotos/circulo.webp", alt: "Cinco mujeres sentadas en círculo, conversando" },
  chat: { src: "/fotos/chat.webp", alt: "El grupo de la comunidad en el móvil" },
  micros: { src: "/fotos/micros.webp", alt: "Dos micrófonos de Equitea frente a frente" },
  rocio: { src: "/fotos/rocio.webp", alt: "Retrato de Rocío Andrada" },
} as const;

export const podcast = {
  titulo: "El podcast",
  entrada:
    "Conversaciones con founders e inversoras de Arabia Saudí, China, Latinoamérica y España. Mujeres que ya llegaron, contando cómo lo hicieron y qué les costó, sin la versión de prensa. Nat pregunta por el negocio y Ro por todo lo demás.",
  destacado: { antes: "Primera temporada ", marcado: "en enero" },
  aviso: {
    texto: "Déjanos tu correo y te avisamos del estreno.",
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
      texto:
        "Pregunta por el negocio: cómo se levantó el dinero, en qué se gastó y qué número mira cada lunes.",
      forma: "arco" as const,
      foto: null,
    },
    {
      nombre: "Rocío Andrada",
      rol: "Co-host y directora creativa",
      texto:
        "Pregunta por todo lo demás: lo que costó, con quién se habló y qué se dejó por el camino.",
      forma: "arco" as const,
      foto: "/fotos/rocio.webp",
    },
  ],
} as const;

export const pie = {
  lema: "Mujeres que emprenden, invierten y lideran.",
  contacto: { antes: "Invitadas y patrocinadores: ", correo: "hola@equitea.com" },
  copyright: "© 2026 Equitea",
} as const;
