import React, { ChangeEvent } from 'react';
import { NumberInputPropsForTriangle } from '../types';

const NumberInput: React.FC<NumberInputPropsForTriangle> = ({ label, onNumberChange }) => {
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
      <label>
        {label}: <input 
        type="number" 
        onChange={handleChange} 
        placeholder={`Enter ${label}`} 
        onKeyPress={handleKeyPress}
        min="0"
        />
      </label>
    </div>
  );
};

export default NumberInput;