import { site } from "@/lib/site";
import styles from "./sections.module.css";

/** Pie mínimo. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <hr className="rule" />
        <div className={styles.footerInner}>
          <span className={styles.footerMark}>{site.name}</span>
          <span className="label">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
