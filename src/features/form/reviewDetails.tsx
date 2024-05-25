import { FormData } from ".";

type ReviewDetailsProps = {
  formData: FormData;
};

export const ReviewDetails = ({formData}: ReviewDetailsProps) => {

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center">Review Your Details</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Full Name:</span>
          <span>{formData.fullName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Email:</span>
          <span>{formData.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Phone Number:</span>
          <span>{formData.phoneNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Salary:</span>
          <span>{formData.salary}</span>
        </div>
      </div>
    </div>
  );
}
