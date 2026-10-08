import type { ReactNode } from 'react';
import styles from './Field.module.css';

type Props = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  hideLabel?: boolean;
  children: ReactNode;
};

export function Field({ id, label, required, hint, error, hideLabel, children }: Props) {
  return (
    <div className={styles.field}>
      {!hideLabel && (
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <span className={styles.star}> *</span>}
        </label>
      )}
      {children}
      {hint && <p className={styles.hint}>{hint}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
