import { founder } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import styles from "./sections.module.css";

/**
 * 03 · Quién está detrás.
 *
 * El "About" no es una página aparte: vive dentro de este mismo scroll.
 * La foto se queda fija y el texto sube a su lado.
 */
export function Founder() {
  return (
    <Section id="quien" number={founder.number} label={founder.label}>
      <div className={`grid ${styles.founder}`}>
        <figure className={styles.portraitWrap}>
          <div className={`media ${styles.portrait}`}>
            {/* Marcador: aquí va el retrato de autoridad, desaturado con
                un acento de color, como marca el benchmark. */}
            <div className={styles.portraitPlaceholder} />
          </div>
          <figcaption className={`label ${styles.portraitCaption}`}>{founder.credit}</figcaption>
        </figure>

        <div className={styles.founderText}>
          <h2 className={`headline reveal ${styles.founderTitle}`}>{founder.title}</h2>
          {founder.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className="body-soft reveal"
              style={{ "--i": index + 1 } as React.CSSProperties}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
