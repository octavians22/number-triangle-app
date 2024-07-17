import React, { ChangeEvent } from 'react';
import { NumberInputPropsForTriangle } from '../types';

const NumberInput: React.FC<NumberInputPropsForTriangle> = ({ label, onNumberChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      onNumberChange(value);
    } else {
      onNumberChange(0);
    }
  };

  return (
    <div>
      <label>
        {label}: <input type="text" onChange={handleChange} placeholder={`Enter ${label}`} />
      </label>
    </div>
  );
};

export default NumberInput;