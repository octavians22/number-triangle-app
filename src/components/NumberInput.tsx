import React, { ChangeEvent } from 'react';
import { NumberInputProps } from '../types';

const NumberInput: React.FC<NumberInputProps> = ({ onNumberChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      onNumberChange(value);
    } else {
      onNumberChange(0);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '-' || event.key === 'e') {
      event.preventDefault();
    }
  };

  return (
    <div>
      <input
        type="number"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a number"
        min="0"
      />
    </div>
  );
};

export default NumberInput;

