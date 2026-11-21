import { Logo } from "@/components/brand/Logo";
import { Barra } from "@/components/chrome/Barra";
import { Campo } from "@/components/chrome/Campo";
import { Carga } from "@/components/chrome/Carga";
import { Revelados } from "@/components/providers/Revelados";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Puente } from "@/components/ui/Escena";

import { Inicio } from "@/components/scenes/Inicio";
import { Comunidad } from "@/components/scenes/Comunidad";
import { Dentro } from "@/components/scenes/Dentro";
import { Solicitud } from "@/components/scenes/Solicitud";
import { Podcast } from "@/components/scenes/Podcast";
import { Anfitrionas } from "@/components/scenes/Anfitrionas";
import { Pie } from "@/components/scenes/Pie";

/**
 * Orden del recorrido. Cambiar el orden de la página es cambiar este bloque:
 * cada escena declara su propio campo de color y el motor hace el resto.
 */
export default function Home() {
  return (
    <>
      <Campo />
      <SmoothScroll />
      <Revelados />
      <Carga />
      <Barra />

      <main>
        <Inicio />

        <Puente>
          <Logo ancho="min(44vw, 320px)" />
        </Puente>

        <Comunidad />
        <Dentro />

        <Puente>
          <Logo ancho="min(44vw, 320px)" />
        </Puente>

        <Solicitud />

        <Puente>
          <Logo ancho="min(44vw, 320px)" />
        </Puente>

        <Podcast />
        <Anfitrionas />
        <Pie />
      </main>
    </>
  );
}
