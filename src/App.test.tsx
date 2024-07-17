import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Number List Generator link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Number List Generator/i);
  expect(linkElement).toBeInTheDocument();
});
