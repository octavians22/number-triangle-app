import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberInput from './NumberInput';

test('calls onNumberChange with the correct value', () => {
  const handleNumberChange = jest.fn();
  const { getByPlaceholderText } = render(<NumberInput onNumberChange={handleNumberChange} />);
  
  const input = getByPlaceholderText('Enter a number');
  fireEvent.change(input, { target: { value: '5' } });
  
  expect(handleNumberChange).toHaveBeenCalledWith(5);
});

test('calls onNumberChange with 0 for invalid input', () => {
  const handleNumberChange = jest.fn();
  const { getByPlaceholderText } = render(<NumberInput onNumberChange={handleNumberChange} />);
  
  const input = getByPlaceholderText('Enter a number');
  fireEvent.change(input, { target: { value: 'invalid' } });
  
  expect(handleNumberChange).toHaveBeenCalledTimes(1);  
  expect(handleNumberChange).toHaveBeenCalledWith(0);   
});