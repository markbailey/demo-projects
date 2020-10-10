import React, { ReactElement } from 'react'

import ICalculator from '../../interfaces/ICalculator';

function Calculator(props: ICalculator): ReactElement {
  return (
    <div className="calculator">
      {props.children}
    </div>
  )
}

export default Calculator
