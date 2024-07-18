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
  
  test('calls onNumberChange with the correct integer part of a floating point number', () => {
    const handleNumberChange = jest.fn();
    const label = 'Base';
    const { getByPlaceholderText } = render(<NumberInputForTriangle label={label} onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText(`Enter ${label}`);
    fireEvent.change(input, { target: { value: '4.7' } });

    expect(handleNumberChange).toHaveBeenCalledWith(4); // Assuming truncation of floating point numbers
  });

  test('handles rapid input changes correctly', () => {
    const handleNumberChange = jest.fn();
    const label = 'Height';
    const { getByPlaceholderText } = render(<NumberInputForTriangle label={label} onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText(`Enter ${label}`);
    
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.change(input, { target: { value: '1234' } });

    expect(handleNumberChange).toHaveBeenCalledWith(1234);
  });

  test('calls onNumberChange with the correct value for very large numbers', () => {
    const handleNumberChange = jest.fn();
    const label = 'Length';
    const { getByPlaceholderText } = render(<NumberInputForTriangle label={label} onNumberChange={handleNumberChange} />);
    
    const input = getByPlaceholderText(`Enter ${label}`);
    fireEvent.change(input, { target: { value: '12345678901234567890' } });

    expect(handleNumberChange).toHaveBeenCalledWith(12345678901234567890);
  });
});