import { useState } from 'react';
import { FormContainer } from './components/formContainer';
import { ContactDetails } from './contactDetails';
import { SalaryDetails } from './salaryDetails';
import { FormNavigation } from './components/navigation';

export type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

export type FormStep = 'contactDetails' | 'salaryDetails'| 'review';

export const Form = () => {

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
  });

  const [formStep, setFormStep] = useState<FormStep>('contactDetails');



  return (
    <FormContainer>
      <h1 className="text-3xl font-bold underline">Form</h1>
      { formStep === 'contactDetails' && <ContactDetails formData={formData} setFormData={setFormData} /> }
      { formStep === 'salaryDetails' && <SalaryDetails formData={formData} setFormData={setFormData} /> }
      { formStep === 'review' && <pre>{JSON.stringify(formData, null, 2)}</pre> }
      <FormNavigation formStep={formStep} setFormStep={setFormStep} />

    </FormContainer>
  );
}
