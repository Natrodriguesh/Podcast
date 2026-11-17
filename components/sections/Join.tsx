import { join } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import styles from "./sections.module.css";

/**
 * 04 · Cómo entrar.
 *
 * Va ANTES del formulario, a propósito: nadie rellena nada sin saber qué
 * pasa después. Decir "respondemos siempre" y "una vez al mes" gestiona
 * la espera en lugar de generar ansiedad.
 */
export function Join() {
  return (
    <Section id="entrar" number={join.number} label={join.label}>
      <h2 className={`headline reveal ${styles.sectionTitle}`}>{join.title}</h2>

      <ol className={styles.steps}>
        {join.steps.map((step, index) => (
          <li
            key={step.n}
            className={`reveal ${styles.step}`}
            style={{ "--i": index + 1 } as React.CSSProperties}
          >
            <span className={`label ${styles.stepNumber}`}>{step.n}</span>
            <div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className="body-soft">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className={`label reveal ${styles.joinNote}`}>{join.note}</p>
    </Section>
  );
}
