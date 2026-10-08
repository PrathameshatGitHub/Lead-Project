import type { FormConfig } from '../../design-system/form/types';

export const leadFormConfig: FormConfig = [
  {
    name: 'fullName',
    type: 'text',
    label: 'Full name',
    validations: { required: true, requiredMessage: 'Please enter your full name' },
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    validations: { required: true, requiredMessage: 'Please enter your email', email: true },
  },
  {
    name: 'leadType',
    type: 'select',
    label: 'Lead type',
    placeholder: 'Choose one',
    options: [
      { value: 'individual', label: 'Individual' },
      { value: 'company', label: 'Company' },
    ],
    validations: { required: true, requiredMessage: 'Please choose a lead type' },
  },
  {
    name: 'companyName',
    type: 'text',
    label: 'Company name',
    showWhen: { field: 'leadType', equals: 'company' },
    validations: { required: true, requiredMessage: 'Please enter your company name' },
  },
  // {
  //   name: 'companySize',
  //   type: 'select',
  //   label: 'Company size',
  //   showWhen: { field: 'leadType', equals: 'company' },
  //   options: [
  //     { value: '1-10', label: '1-10' },
  //     { value: '11-50', label: '11-50' },
  //   ],
  // },
  {
    name: 'phone',
    type: 'text',
    label: 'Phone',
    hint: '10 digits',
    validations: {
      required: true,
      requiredMessage: 'Please enter your phone number',
      pattern: { regex: '^[0-9]{10}$', message: 'Phone number must be 10 digits' },
    },
  },
  {
    name: 'notes',
    type: 'textarea',
    label: 'Notes',
    hint: 'Optional, max 200 characters',
    fullWidth: true,
    validations: { maxLength: 200 },
  },
  {
    name: 'consent',
    type: 'checkbox',
    label: 'I agree to be contacted',
    fullWidth: true,
    validations: { required: true, requiredMessage: 'Please accept to continue' },
  },
];
