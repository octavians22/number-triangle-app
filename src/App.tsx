import React, { useState } from 'react';
import NumberInput from './components/NumberInput';
import NumberInputForTriangle from './components/NumberInputForTriangle';
import NumberList from './components/NumberList';
import TriangleArea from './components/TriangleArea';
import { generateNumbers } from './utils/generateNumbers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl, faRulerVertical, faRulerHorizontal, faShapes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const handleNumberListChange = (num: number) => {
    const generatedNumbers = generateNumbers(num);
    setNumbers(generatedNumbers);
  };

  return (
    <div className="container">
      <h1>Number List Generator</h1>
      <div className="input-group">
        <FontAwesomeIcon icon={faListOl} className="icon" />
        <NumberInput onNumberChange={handleNumberListChange} />
      </div>
      <NumberList numbers={numbers} />

      <h1>Triangle Area Calculator</h1>
      <div className="input-group">
        <FontAwesomeIcon icon={faRulerVertical} className="icon" />
        <NumberInputForTriangle label="Height" onNumberChange={setHeight} />
      </div>
      <div className="input-group width-adjust">
        <FontAwesomeIcon icon={faRulerHorizontal} className="icon" />
        <NumberInputForTriangle label="Width" onNumberChange={setWidth} />
      </div>
      <TriangleArea height={height} width={width} />
    </div>
  );
};

export default App;


