import styles from './control.module.css';

type Props = {
  id: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder?: string;
  invalid?: boolean;
};

export function Select({ id, name, value, options, onChange, onBlur, placeholder, invalid }: Props) {
  const className = invalid ? `${styles.control} ${styles.invalid}` : styles.control;

  return (
    <select
      id={id}
      name={name}
      value={value}
      className={className}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    >
      <option value="">{placeholder || 'Select'}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
