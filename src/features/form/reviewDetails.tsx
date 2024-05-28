import { FormData } from ".";

type ReviewDetailsProps = {
  formData: FormData;
  errors: Partial<FormData>;
};

export const ReviewDetails = ({formData, errors}: ReviewDetailsProps) => {

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white ">
      <h2 className="text-2xl font-bold mb-4 text-center">Review Your Details</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Full Name:</span>
          <span>{formData.fullName}</span>
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Email:</span>
          <span>{formData.email}</span>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Phone Number:</span>
          <span>{formData.phoneNumber}</span>
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Salary:</span>
          <span>{formData.salary}</span>
          {errors.salary && <span className="error">{errors.salary}</span>}
        </div>
      </div>
    </div>
  );
}
