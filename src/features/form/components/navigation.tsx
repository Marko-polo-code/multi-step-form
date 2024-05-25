import { FormStep } from '../index';

type Props = {
  formStep: FormStep;
  setFormStep: React.Dispatch<React.SetStateAction<FormStep>>;
};

export const FormNavigation = ({formStep, setFormStep}: Props) => {

  const handleBack = () => {
    if (formStep === 'contactDetails') return;
    if (formStep === 'salaryDetails') {
      setFormStep('contactDetails');
    }
    if (formStep === 'review') {
      setFormStep('salaryDetails');
    }
  }

  const handleNext = () => {
    if (formStep === 'contactDetails') {
      setFormStep('salaryDetails');
    }
    if (formStep === 'salaryDetails') {
      setFormStep('review');
    }
  }

  return (
    <div>
      <button onClick={handleBack} disabled={formStep === 'contactDetails' ? true : false}>Back</button>
      <button onClick={handleNext}>{formStep === 'review' ? 'Submit' : 'Next'}</button>
    </div>
  );
}
