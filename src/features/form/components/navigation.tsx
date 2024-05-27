import { FormStep } from '../index';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

type Props = {
  formStep: FormStep;
  setFormStep: React.Dispatch<React.SetStateAction<FormStep>>;
  validate: () => boolean;
};

export const FormNavigation = ({formStep, setFormStep, validate}: Props) => {
  const { toast } = useToast();

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
    } else if (formStep === 'salaryDetails') {
      setFormStep('review');
    } else if (formStep === 'review') {
      if (validate()) {
        toast({ title: 'Congratulations! Your form has been submitted successfully' });
      } else {
        toast({ title: 'Form validation failed. Please check your inputs.', variant: 'destructive' });
      }
    }
  }

  return (
    <div className="flex space-x-4 mt-8">
      { formStep !== 'contactDetails' && <Button variant="outline" size={"lg"} className='text-lg' onClick={handleBack}>Back</Button> }
      <Button variant="default" size={"lg"} className='text-lg' onClick={handleNext}>{formStep === 'review' ? 'Submit' : 'Next'}</Button>
    </div>
  );
}
