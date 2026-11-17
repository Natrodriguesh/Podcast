import { what } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import styles from "./sections.module.css";

/** 01 · Qué es. Aquí se decide si sigue bajando. */
export function What() {
  return (
    <Section id="que-es" number={what.number} label={what.label}>
      <div className="grid">
        <h2 className={`headline reveal ${styles.whatTitle}`}>{what.title}</h2>

        <div className={styles.whatBody}>
          {what.body.map((paragraph, index) => (
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
