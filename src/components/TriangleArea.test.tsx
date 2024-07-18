import React from 'react';
import { render } from '@testing-library/react';
import TriangleArea from './TriangleArea';

test('displays the correct area of the triangle', () => {
  const { getByText } = render(<TriangleArea height={10} width={5} />);
  
  expect(getByText('The area of the triangle is: 25')).toBeInTheDocument();
});

test('displays zero area for zero height and width', () => {
  const { getByText } = render(<TriangleArea height={0} width={0} />);
  
  expect(getByText('The area of the triangle is: 0')).toBeInTheDocument();
});

test('displays correct area for floating point numbers', () => {
  const { getByText } = render(<TriangleArea height={10.5} width={5.5} />);
  
  expect(getByText('The area of the triangle is: 28.875')).toBeInTheDocument(); 
});

test('displays correct area for zero height', () => {
  const { getByText } = render(<TriangleArea height={0} width={5} />);
  
  expect(getByText('The area of the triangle is: 0')).toBeInTheDocument(); 
});

test('displays correct area for zero width', () => {
  const { getByText } = render(<TriangleArea height={10} width={0} />);
  
  expect(getByText('The area of the triangle is: 0')).toBeInTheDocument(); 
});