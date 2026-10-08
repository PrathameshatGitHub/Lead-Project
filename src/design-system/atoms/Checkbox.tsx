import styles from './Checkbox.module.css';

type Props = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onBlur: () => void;
  invalid?: boolean;
};

export function Checkbox({ id, name, label, checked, onChange, onBlur, invalid }: Props) {
  return (
    <label className={styles.wrap} htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        className={invalid ? `${styles.box} ${styles.invalid}` : styles.box}
        onChange={(e) => onChange(e.target.checked)}
        onBlur={onBlur}
      />
      <span>{label}</span>
    </label>
  );
}
