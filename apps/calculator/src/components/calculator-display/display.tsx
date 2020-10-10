import React from 'react';

import ICalculatorDisplay from '../../interfaces/ICalculatorDisplay';

function CalculatorDisplay(props: ICalculatorDisplay) {
  const { equation, currentValue } = props;
  return (
    <div className="calculator__display">
      <small className="equation">{equation}</small>
      <span className="total">{currentValue}</span>
    </div>
  );
}

export default CalculatorDisplay;
