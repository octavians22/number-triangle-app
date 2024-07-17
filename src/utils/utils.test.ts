import { calculateTriangleArea } from './calculateTriangleArea';
import { generateNumbers } from './generateNumbers';

test('calculates the area of a triangle correctly', () => {
  expect(calculateTriangleArea(10, 5)).toBe(25);
  expect(calculateTriangleArea(0, 5)).toBe(0);
  expect(calculateTriangleArea(10, 0)).toBe(0);
});

test('generates a list of numbers correctly', () => {
  expect(generateNumbers(5)).toEqual([1, 2, 3, 4, 5]);
  expect(generateNumbers(0)).toEqual([]);
  expect(generateNumbers(1)).toEqual([1]);
});