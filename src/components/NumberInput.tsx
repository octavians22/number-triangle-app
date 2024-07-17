import React, { ChangeEvent } from 'react';
import { NumberInputProps } from '../types';

const NumberInput: React.FC<NumberInputProps> = ({ onNumberChange }) => {
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
      <input type="text" onChange={handleChange} placeholder="Enter a number" />
    </div>
  );
};

export default NumberInput;