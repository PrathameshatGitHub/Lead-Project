import { useState } from 'react';
import { DynamicForm } from '../../design-system/form/DynamicForm';
import type { FormValues } from '../../design-system/form/types';
import { leadFormConfig } from './leadFormConfig';
import { validate } from './validation';
import styles from './LeadPage.module.css';

export function LeadPage() {
  const [result, setResult] = useState<FormValues | null>(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(values: FormValues) {
    // console.log("submited before validate", values);
    console.log("submited form valuse:", values);
    // alert(JSON.stringify(values));
    setResult(values);
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Talk to us</h1>
        <p className={styles.intro}>Fill in your details and we will get back to you.</p>

        <DynamicForm config={leadFormConfig} validate={validate} onSubmit={handleSubmit} />

        {result && (
          <div className={styles.result}>
            <h2>Submitted values</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
