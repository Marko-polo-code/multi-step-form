import { useState } from 'react';
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

export const Form = () => {

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
  });

  const [formStep, setFormStep] = useState<FormStep>('contactDetails');

  return (
    <div className='flex w-full justify-center py-32'>

    <FormContainer>
      <h1 className="text-3xl font-bold mb-8 text-center">Buena Registration</h1>
      <ProgressBar formStep={formStep} />
      { formStep === 'contactDetails' && <ContactDetails formData={formData} setFormData={setFormData} /> }
      { formStep === 'salaryDetails' && <SalaryDetails formData={formData} setFormData={setFormData} /> }
      { formStep === 'review' && <ReviewDetails formData={formData} /> }
      <FormNavigation formStep={formStep} setFormStep={setFormStep} />

    </FormContainer>
    </div>
  );
}
