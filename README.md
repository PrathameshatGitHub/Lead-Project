# Lead capture form

A lead form built from a config array, with a small design system. React, TypeScript and CSS modules.

## Run

```
npm install
npm run dev
```

Open http://localhost:5173

## Folders

```
src/
  design-system/
    tokens/tokens.css            colors, spacing, fonts, breakpoints
    atoms/                       TextInput, Select, Checkbox, Button
    molecules/Field.tsx          label + control + hint + error
    form/DynamicForm.tsx         renders one field per config entry
    form/DynamicForm.module.css  form layout (desktop and mobile)
  features/lead/
    leadFormConfig.ts            the list of fields
    validation.ts                validate(config, values) returns errors
    LeadPage.tsx                 the page
    LeadPage.module.css          page layout
```

## Where things are

- Tokens: `src/design-system/tokens/tokens.css`
- Atoms: `src/design-system/atoms/`
- Form: `src/design-system/form/DynamicForm.tsx`
- Config: `src/features/lead/leadFormConfig.ts`
- Validation rules: `src/features/lead/validation.ts`

## Layout

- Desktop (over 1024px): two columns, set in `DynamicForm.module.css`
- Mobile (under 768px): one column and a sticky submit button, also in `DynamicForm.module.css`
- Tablet: one column like mobile, the button is not sticky
- Page width and padding: `LeadPage.module.css`

## Adding a field

Add one object to `leadFormConfig.ts`. Use `showWhen` to show it only for a certain value of another field, and `fullWidth` to span both columns on desktop.
