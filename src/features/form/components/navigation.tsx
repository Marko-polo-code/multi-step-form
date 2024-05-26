import { FormStep } from '../index';
import { Button } from '@/components/ui/button';

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
    <div className="flex space-x-4 mt-8">
      { formStep !== 'contactDetails' && <Button variant="outline" size={"lg"} className='text-lg' onClick={handleBack}>Back</Button> }
      <Button variant="default" size={"lg"} className='text-lg' onClick={handleNext}>{formStep === 'review' ? 'Submit' : 'Next'}</Button>
    </div>
  );
}
