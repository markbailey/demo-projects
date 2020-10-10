import React, { ReactElement } from 'react'

import ICalculatorKeypad from '../../interfaces/ICalculatorKeypad'

function Keypad(props:ICalculatorKeypad): ReactElement {
  return (
    <div className="calculator__keys">
      {props.children}
    </div>
  )
}

export default Keypad
