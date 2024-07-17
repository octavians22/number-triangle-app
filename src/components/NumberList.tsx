import React from 'react';
import { NumberListProps } from '../types';

const NumberList: React.FC<NumberListProps> = ({ numbers }) => {
  return (
    <div>
      {numbers.map((number) => (
        <span key={number}>{number} </span>
      ))}
    </div>
  );
};

export default NumberList;