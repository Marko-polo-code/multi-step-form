import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReviewDetails } from '../reviewDetails';
import { FormData } from '../index';

describe('ReviewDetails', () => {
  const formData: FormData = {
    fullName: 'Mark Müller',
    email: 'mark.muller@gmail.com',
    phoneNumber: '017662808315',
    salary: '2000 - 3000',
  };
  const errors: Partial<FormData> = {
    fullName: 'Name is required',
    email: 'Invalid email',
    phoneNumber: 'Invalid phone number',
    salary: 'Salary is required',
  };

  it('renders without crashing', () => {
    render(<ReviewDetails formData={formData} errors={errors}/>);
  });

  it('displays correct details from formData and errors', () => {
    const { getByText } = render(<ReviewDetails formData={formData} errors={errors} />);

    expect(getByText('Mark Müller')).toBeInTheDocument();
    expect(getByText('mark.muller@gmail.com')).toBeInTheDocument();
    expect(getByText('017662808315')).toBeInTheDocument();
    expect(getByText('2000 - 3000')).toBeInTheDocument();
  });
});
