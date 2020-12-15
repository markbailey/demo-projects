import React, { ReactElement } from 'react';

import ICalculatorDisplay from '../../interfaces/ICalculatorDisplay';

export default function Display(props: ICalculatorDisplay): ReactElement {
  const { equation, currentValue } = props;
  return (
    <div className="calculator__display">
      <small className="equation">{equation}</small>
      <span className="total">{currentValue}</span>
    </div>
  );
}
