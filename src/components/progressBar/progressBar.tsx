import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProgressIndicator: React.FC = () => {
  const step = useSelector((state: RootState) => state.form.step);

  return (
    <div className="flex justify-center space-x-2 mb-4">
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className={`w-3 h-3 rounded-full ${step >= num ? 'bg-blue-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
