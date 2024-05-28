import { FormData } from ".";
import { Input } from "@/components/ui/input"


type ContactDetailsProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  errors: Partial<FormData>;
};

export const ContactDetails = ({formData, setFormData, errors}: ContactDetailsProps) => {

  return (


    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Details</h1>

      <label htmlFor="fullName" className="text-lg pb-2">Full Name</label>
      <Input
        type="text"
        id="fullName"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4"
      />
      {errors.salary && <span className="error">{errors.salary}</span>}


      <label htmlFor="email" className="text-lg pb-2">Email</label>
      <Input
        type="email"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4"
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <label htmlFor="phoneNumber" className="text-lg pb-2">Phone Number</label>
      <Input
        type="tel"
        id="phoneNumber"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
      {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
    </div>

  );
};
