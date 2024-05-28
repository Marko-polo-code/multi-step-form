import { FormData } from ".";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


type SalaryDetailsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: Partial<FormData>;
};


export const SalaryDetails = ({formData, setFormData, errors}: SalaryDetailsProps) => {

  const handleSalaryChange = ( value: string ) => {
    setFormData({ ...formData, salary: value });
  }

  return (

    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">

      <h1 className="text-2xl font-bold mb-8 text-center">Salary Details</h1>

      <div className="space-y-4">

        <p className="text-xl font-semibold mb-6">What is your salary range?</p>
        <RadioGroup
          defaultValue="option-one"
          onValueChange={handleSalaryChange}
          className="flex flex-col space-y-4 mt-6"
          >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0 - 1000" id="Salary-1"/>
            <Label htmlFor="0 - 1000" className="text-lg">0 - 1000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1000 - 2000" id="Salary-2" />
            <Label htmlFor="1000 - 2000" className="text-lg">1000 - 2000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2000 - 3000" id="Salary-3" />
            <Label htmlFor="2000 - 3000" className="text-lg">2000 - 3000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3000 - 4000" id="Salary-4" />
            <Label htmlFor="3000 - 4000" className="text-lg">3000 - 4000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Mehr als 4000" id="Salary-5" />
            <Label htmlFor="Mehr als 4000" className="text-lg">Mehr als 4000</Label>
          </div>
        </RadioGroup>
        {errors.salary && <span className="error">{errors.salary}</span>}
      </div>

    </div>

  );
};
