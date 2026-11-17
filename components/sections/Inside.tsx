import { inside } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import styles from "./sections.module.css";

/** 02 · Qué pasa dentro. Tres pilares. Tres, no cinco. */
export function Inside() {
  return (
    <Section id="dentro" number={inside.number} label={inside.label}>
      <h2 className={`headline reveal ${styles.sectionTitle}`}>{inside.title}</h2>

      <ol className={styles.pillars}>
        {inside.pillars.map((pillar, index) => (
          <li
            key={pillar.n}
            className={`reveal ${styles.pillar}`}
            style={{ "--i": index + 1 } as React.CSSProperties}
          >
            <span className={`label ${styles.pillarNumber}`}>{pillar.n}</span>
            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
            <p className="body-soft">{pillar.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
