import React from 'react';
import { render } from '@testing-library/react';
import NumberList from './NumberList';

test('displays the correct list of numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const { getByText } = render(<NumberList numbers={numbers} />);
  
  numbers.forEach((number) => {
    expect(getByText(number.toString())).toBeInTheDocument();
  });
});