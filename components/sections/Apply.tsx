"use client";

import { useState } from "react";
import { apply } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import styles from "./sections.module.css";

/**
 * 05 · Solicitud.
 *
 * Aquí se acaba el movimiento. Un formulario que se mueve es un formulario
 * que no se rellena: nada de revelados, nada de parallax, nada de inercia
 * peleando con el teclado del móvil.
 *
 * ⚠️  NO ESTÁ CONECTADO. Falta decidir dónde caen los envíos.
 */
export function Apply() {
  const [attempted, setAttempted] = useState(false);

  return (
    <Section id="solicitud" number={apply.number} label={apply.label}>
      <div className={`grid ${styles.apply}`}>
        <div className={styles.applyIntro}>
          <h2 className={`headline ${styles.applyTitle}`}>{apply.title}</h2>
          <p className="body-soft">{apply.support}</p>
        </div>

        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            setAttempted(true);
          }}
          noValidate={false}
        >
          {apply.fields.map((field) => (
            <div key={field.name} className={styles.field}>
              <label htmlFor={field.name} className={styles.fieldLabel}>
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                className={styles.input}
              />
            </div>
          ))}

          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label htmlFor={apply.textarea.name} className={styles.fieldLabel}>
              {apply.textarea.label}
            </label>
            <textarea
              id={apply.textarea.name}
              name={apply.textarea.name}
              rows={4}
              required
              className={`${styles.input} ${styles.textarea}`}
              aria-describedby={`${apply.textarea.name}-hint`}
            />
            <p id={`${apply.textarea.name}-hint`} className={styles.hint}>
              {apply.textarea.hint}
            </p>
          </div>

          <button type="submit" className={styles.submit}>
            {apply.submit}
          </button>

          {attempted && (
            <p role="status" className={styles.notice}>
              Formulario aún sin conectar. Falta decidir dónde se guardan las solicitudes.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
