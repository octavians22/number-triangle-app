import React from 'react';
import { render } from '@testing-library/react';
import TriangleArea from './TriangleArea';

test('displays the correct area of the triangle', () => {
  const { getByText } = render(<TriangleArea height={10} width={5} />);
  
  expect(getByText('The area of the triangle is: 25')).toBeInTheDocument();
});