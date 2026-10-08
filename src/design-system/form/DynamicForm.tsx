import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button, Checkbox, Select, TextInput } from '../atoms';
import { Field } from '../molecules/Field';
import { isVisible } from './visibility';
import type { FieldConfig, FormConfig, FormValues, ValidateFn } from './types';
import styles from './DynamicForm.module.css';

type Props = {
  config: FormConfig;
  validate: ValidateFn;
  onSubmit: (values: FormValues) => void;
};

function getInitialValues(config: FormConfig) {
  const values: FormValues = {};
  config.forEach((field) => {
    values[field.name] = field.type === 'checkbox' ? false : '';
  });
  return values;
}

export function DynamicForm({ config, validate, onSubmit }: Props) {
  const [values, setValues] = useState<FormValues>(getInitialValues(config));
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(config, values);

  function handleChange(name: string, value: string | boolean) {
    // console.log("filed chnage:", name, value);
    setValues({ ...values, [name]: value });
  }

  function handleBlur(name: string) {
    // console.log("blurd filed:", name);
    setTouched({ ...touched, [name]: true });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    // console.log("validating form data...");
    console.log("validajtn erorrs:", errors);

    const firstError = config.find((field) => errors[field.name]);
    if (firstError) {
      // console.log("focusing first err filed:", firstError.name);
      document.getElementById(firstError.name)?.focus();
      return;
    }

    const result: FormValues = {};
    config.forEach((field) => {
      if (isVisible(field, values)) {
        result[field.name] = values[field.name];
      }
    });
    // console.log("submited valuse:", result);
    onSubmit(result);
  }

  function renderControl(field: FieldConfig) {
    const value = values[field.name];
    const invalid = Boolean(errors[field.name]) && (touched[field.name] || submitted);
    const common = {
      id: field.name,
      name: field.name,
      invalid,
      onBlur: () => handleBlur(field.name),
    };

    switch (field.type) {
      case 'select':
        return (
          <Select
            {...common}
            value={String(value)}
            options={field.options || []}
            placeholder={field.placeholder}
            onChange={(v) => handleChange(field.name, v)}
          />
        );
      case 'checkbox':
        return (
          <Checkbox
            {...common}
            label={field.label}
            checked={value === true}
            onChange={(v) => handleChange(field.name, v)}
          />
        );
      default:
        return (
          <TextInput
            {...common}
            value={String(value)}
            type={field.type === 'email' ? 'email' : 'text'}
            multiline={field.type === 'textarea'}
            placeholder={field.placeholder}
            onChange={(v) => handleChange(field.name, v)}
          />
        );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        {config.filter((field) => isVisible(field, values)).map((field) => {
          const showError = touched[field.name] || submitted;
          const className = field.fullWidth ? `${styles.field} ${styles.fullWidth}` : styles.field;

          return (
            <div key={field.name} className={className}>
              <Field
                id={field.name}
                label={field.label}
                required={field.validations?.required}
                hint={field.hint}
                error={showError ? errors[field.name] : undefined}
                hideLabel={field.type === 'checkbox'}
              >
                {renderControl(field)}
              </Field>
            </div>
          );
        })}

        <div className={styles.actions}>
          <Button type="submit">Send enquiry</Button>
        </div>
      </div>
    </form>
  );
}
