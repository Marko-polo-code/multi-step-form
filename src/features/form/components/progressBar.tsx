import { FormStep } from '../index';
import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  formStep: FormStep;
};

const stepMap: { [key in FormStep]: number } = {
  contactDetails: 1,
  salaryDetails: 2,
  review: 3,
};

export const ProgressBar = ({ formStep }: ProgressBarProps) => {
  const currentStep = stepMap[formStep];
  const totalSteps = Object.keys(stepMap).length;
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div>
      <Progress value={progressPercentage} />
    </div>
  );
};
