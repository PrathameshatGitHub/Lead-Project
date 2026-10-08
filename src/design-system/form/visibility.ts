import type { FieldConfig, FormValues } from './types';

export function isVisible(field: FieldConfig, values: FormValues) {
  if (!field.showWhen) {
    return true;
  }
  return values[field.showWhen.field] === field.showWhen.equals;
}
