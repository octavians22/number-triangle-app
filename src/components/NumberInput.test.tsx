import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberInput from './NumberInput';

describe('NumberInput component', () => {
  test('calls onNumberChange with the correct value', () => {
    const handleNumberChange = jest.fn();
    const { getByPlaceholderText } = render(<NumberInput onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText('Enter a number');
    fireEvent.change(input, { target: { value: '5' } });
    
    expect(handleNumberChange).toHaveBeenCalledWith(5);
  });

  test('calls onNumberChange with the correct large number', () => {
    const handleNumberChange = jest.fn();
    const { getByPlaceholderText } = render(<NumberInput onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText('Enter a number');
    fireEvent.change(input, { target: { value: '12345678901234567890' } });

    expect(handleNumberChange).toHaveBeenCalledWith(12345678901234567890);
  });

  test('handles multiple rapid input changes correctly', () => {
    const handleNumberChange = jest.fn();
    const { getByPlaceholderText } = render(<NumberInput onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText('Enter a number');
    
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.change(input, { target: { value: '1234' } });

    expect(handleNumberChange).toHaveBeenCalledWith(1234);
  });

  test('calls onNumberChange with the correct value for input with leading zeros', () => {
    const handleNumberChange = jest.fn();
    const { getByPlaceholderText } = render(<NumberInput onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText('Enter a number');
    fireEvent.change(input, { target: { value: '000123' } });

    expect(handleNumberChange).toHaveBeenCalledWith(123);
  });
});
