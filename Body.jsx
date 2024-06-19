import React, { useState } from 'react';
import './Body.css';

function Body() {
  const [display, setDisplay] = useState(0);

  const btnClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clear = () => {
    setDisplay(0);
  };

  const cal = () => {
      setDisplay(eval(display));  
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => btnClick('1')}>1</button>
          <button onClick={() => btnClick('2')}>2</button>
          <button onClick={() => btnClick('3')}>3</button>
          <button onClick={() => btnClick('+')}>+</button>
          <button onClick={() => btnClick('4')}>4</button>
          <button onClick={() => btnClick('5')}>5</button>
          <button onClick={() => btnClick('6')}>6</button>
          <button onClick={() => btnClick('-')}>-</button>
          <button onClick={() => btnClick('7')}>7</button>
          <button onClick={() => btnClick('8')}>8</button>
          <button onClick={() => btnClick('9')}>9</button>
          <button onClick={() => btnClick('*')}>*</button>
          <button onClick={() => btnClick('0')}>0</button>
          <button onClick={() => btnClick('.')}>.</button>
          <button onClick={cal}>=</button>
          <button onClick={() => btnClick('/')}>/</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
