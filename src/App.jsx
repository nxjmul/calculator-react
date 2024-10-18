import React, { useState } from 'react';
import './index.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); 
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => handleClick('1')}>1</button>
          <button className="btn" onClick={() => handleClick('2')}>2</button>
          <button className="btn" onClick={() => handleClick('3')}>3</button>
          <button className="btn operator" onClick={() => handleClick('+')}>+</button>
          <button className="btn" onClick={() => handleClick('4')}>4</button>
          <button className="btn" onClick={() => handleClick('5')}>5</button>
          <button className="btn" onClick={() => handleClick('6')}>6</button>
          <button className="btn operator" onClick={() => handleClick('-')}>-</button>
          <button className="btn" onClick={() => handleClick('7')}>7</button>
          <button className="btn" onClick={() => handleClick('8')}>8</button>
          <button className="btn" onClick={() => handleClick('9')}>9</button>
          <button className="btn operator" onClick={() => handleClick('*')}>*</button>
          <button className="btn" onClick={() => handleClick('0')}>0</button>
          <button className="btn clear" onClick={handleClear}>C</button>
          <button className="btn equals" onClick={handleCalculate}>=</button>
          <button className="btn operator" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
