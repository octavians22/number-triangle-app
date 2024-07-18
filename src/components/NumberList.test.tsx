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

test('displays a single number correctly', () => {
  const numbers = [42];
  const { getByText } = render(<NumberList numbers={numbers} />);
  
  expect(getByText('42')).toBeInTheDocument();
});

test('displays negative numbers correctly', () => {
  const numbers = [-1, -2, -3, -4, -5];
  const { getByText } = render(<NumberList numbers={numbers} />);
  
  numbers.forEach((number) => {
    expect(getByText(number.toString())).toBeInTheDocument();
  });
});

test('displays repeated numbers correctly', () => {
  const numbers = [1, 2, 2, 3, 3, 3];
  const { getByText } = render(<NumberList numbers={numbers} />);
  
  numbers.forEach((number, index) => {
    const elements = document.querySelectorAll('span');
    const occurrences = Array.from(elements).filter(el => el.textContent === `${number} `);
    expect(occurrences.length).toBe(numbers.filter(n => n === number).length);
  });
});

test('displays large numbers correctly', () => {
  const numbers = [1000000000, 2000000000, 3000000000];
  const { getByText } = render(<NumberList numbers={numbers} />);
  
  numbers.forEach((number) => {
    expect(getByText(number.toString())).toBeInTheDocument();
  });
});

test('displays mixed positive and negative numbers correctly', () => {
  const numbers = [-1, 2, -3, 4, -5];
  const { getByText } = render(<NumberList numbers={numbers} />);
  
  numbers.forEach((number) => {
    expect(getByText(number.toString())).toBeInTheDocument();
  });
});