import { useState } from 'react';
import { FormContainer } from './components/formContainer';
import { ContactDetails } from './contactDetails';

export type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

export const Form = () => {

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    salary: '',
  });

  console.log(formData);
  
  return (
    <FormContainer>
      <h1 className="text-3xl font-bold underline">Form</h1>
      <ContactDetails formData={formData} setFormData={setFormData} />


    </FormContainer>
  );
}
