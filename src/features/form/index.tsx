import { useState } from 'react';
import { z } from 'zod';
import { FormContainer } from './components/formContainer';
import { ContactDetails } from './contactDetails';
import { SalaryDetails } from './salaryDetails';
import { FormNavigation } from './components/navigation';
import { ReviewDetails } from './reviewDetails';
import { ProgressBar } from './components/progressBar';

export type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

export type FormStep = 'contactDetails' | 'salaryDetails'| 'review';

const schema = z.object({
  fullName: z.string().regex(/^[\p{L}\s'-üÜäÄöÖß]+$/, 'Full name must contain at least firstname and surname'),
  email: z.string().email('Invalid email format'),
  phoneNumber: z.string().trim().regex(/^(?:\+49|0)(?:\d{1,4})?(?:[\s.-]?\d{1,4}){1,3}(?:\s?(?:x|ext|\#)\s?\d{1,5})?$/,
  'Invalid phone number'),
  salary: z.string().min(5),
});

export const Form = () => {

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
  });

  const [formStep, setFormStep] = useState<FormStep>('contactDetails');

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    try {
      schema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {};
        err.errors.forEach((error) => {
          if (error.path.length > 0) {
            fieldErrors[error.path[0] as keyof FormData] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  return (
    <div className='flex w-full justify-center py-32'>

    <FormContainer>
      <h1 className="text-3xl font-bold mb-8 text-center">Registration</h1>
      <ProgressBar formStep={formStep} />
        { formStep === 'contactDetails' && <ContactDetails formData={formData} setFormData={setFormData} errors={errors} /> }
        { formStep === 'salaryDetails' && <SalaryDetails formData={formData} setFormData={setFormData} errors={errors} /> }
        { formStep === 'review' && <ReviewDetails formData={formData} errors={errors} /> }
      <FormNavigation formStep={formStep} setFormStep={setFormStep} validate={validate} />

    </FormContainer>
    </div>
  );
}
