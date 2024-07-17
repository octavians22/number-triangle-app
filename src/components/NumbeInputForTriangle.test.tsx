import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberInputForTriangle from './NumberInputForTriangle';

describe('NumberInputForTriangle component', () => {
  test('calls onNumberChange with the correct value', () => {
    const handleNumberChange = jest.fn();
    const label = 'Height';
    const { getByPlaceholderText } = render(<NumberInputForTriangle label={label} onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText(`Enter ${label}`);
    fireEvent.change(input, { target: { value: '5' } });
    
    expect(handleNumberChange).toHaveBeenCalledWith(5);
  });

  test('calls onNumberChange with 0 for invalid input', () => {
    const handleNumberChange = jest.fn();
    const label = 'Width';
    const { getByPlaceholderText } = render(<NumberInputForTriangle label={label} onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText(`Enter ${label}`);
    fireEvent.change(input, { target: { value: 'invalid' } });
    
    expect(handleNumberChange).toHaveBeenCalledWith(0);
  });
});