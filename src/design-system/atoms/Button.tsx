import type { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export function Button({ children, type = 'button', onClick }: Props) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
