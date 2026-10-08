export type FieldType = 'text' | 'email' | 'select' | 'textarea' | 'checkbox';

export type FormValues = Record<string, string | boolean>;
export type FormErrors = Record<string, string>;

export type FieldConfig = {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  hint?: string;
  options?: { value: string; label: string }[];
  fullWidth?: boolean;
  showWhen?: { field: string; equals: string };
  validations?: {
    required?: boolean;
    requiredMessage?: string;
    email?: boolean;
    pattern?: { regex: string; message: string };
    maxLength?: number;
  };
};

export type FormConfig = FieldConfig[];

export type ValidateFn = (config: FormConfig, values: FormValues) => FormErrors;
