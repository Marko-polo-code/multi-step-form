import { FormData } from ".";

type SalaryDetailsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
};

export const SalaryDetails = ({formData, setFormData}: SalaryDetailsProps) => {

  return (

    <div className="mt-8">
      <label htmlFor="salary">Salary</label>
      <input
        type="radio"
        id="Salary"
        value={formData.salary}
        onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />

    </div>

  );
};
