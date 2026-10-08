import styles from './control.module.css';

type Props = {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: 'text' | 'email';
  multiline?: boolean;
  placeholder?: string;
  invalid?: boolean;
};

export function TextInput({
  id,
  name,
  value,
  onChange,
  onBlur,
  type = 'text',
  multiline,
  placeholder,
  invalid,
}: Props) {
  const className = invalid ? `${styles.control} ${styles.invalid}` : styles.control;

  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        rows={4}
        placeholder={placeholder}
        className={className}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    />
  );
}
