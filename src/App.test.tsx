import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Number List Generator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Number List Generator/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Triangle Area Calculator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Triangle Area Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
