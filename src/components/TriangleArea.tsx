import React from 'react';
import { TriangleAreaProps } from '../types';

const TriangleArea: React.FC<TriangleAreaProps> = ({ height, width }) => {
  const area = (height * width) / 2;

  return (
    <div>
      <p>The area of the triangle is: {area}</p>
    </div>
  );
};

export default TriangleArea;