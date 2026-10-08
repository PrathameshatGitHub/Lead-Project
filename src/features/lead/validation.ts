import type { FieldConfig, FormConfig, FormErrors, FormValues } from '../../design-system/form/types';
import { isVisible } from '../../design-system/form/visibility';

// const emailRegex = /^\S+@\S+\.\S+$/;
// const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getError(field: FieldConfig, value: string | boolean) {
  const rules = field.validations;
  if (!rules) {
    return '';
  }

  const isEmpty = typeof value === 'boolean' ? !value : value.trim() === '';

  if (isEmpty) {
    if (rules.required) {
      return rules.requiredMessage || `${field.label} is required`;
    }
    return '';
  }

  if (typeof value === 'boolean') {
    return '';
  }

  const text = value.trim();

  if (rules.email && !emailRegex.test(text)) {
    return 'Please enter a valid email';
  }
  if (rules.pattern && !new RegExp(rules.pattern.regex).test(text)) {
    return rules.pattern.message;
  }
  if (rules.maxLength && text.length > rules.maxLength) {
    return `${field.label} must be at most ${rules.maxLength} characters`;
  }
  return '';
}

export function validate(config: FormConfig, values: FormValues) {
  const errors: FormErrors = {};
  // console.log("runing validajtn on valuse:", values);

  config.forEach((field) => {
    if (!isVisible(field, values)) {
      // delete errors[field.name];
      return;
    }
    const error = getError(field, values[field.name]);
    if (error) {
      // console.log("filed err:", field.name, error);
      errors[field.name] = error;
    }
  });

  return errors;
}
