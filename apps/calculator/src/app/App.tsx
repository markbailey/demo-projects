import React, { ReactElement, useState } from 'react';

import {
  OperatorButton,
  NumPadButton,
  EqualsButton,
} from '../components/button';
import Calculator from '../components/calculator';
import Display from '../components/display';
import Keypad from '../components/keypad';
import calculate, { OPERATORS } from '../utils/calculate';

function App(): ReactElement {
  const [equation, setEquation] = useState('');
  const [lastOperator, setLastOperator] = useState('');
  const [total, setTotal] = useState(0);
  const [currentValue, setCurrentValue] = useState('0');

  const clear = (): void => {
    setEquation('');
    setTotal(0);
    setCurrentValue('0');
  };

  const equals = (): void => {
    const equationToUse = `${lastOperator === '' ? `${equation} ${currentValue}` : equation.substring(0, equation.length - 1)}`;
    const newEquation = `${equationToUse} ${OPERATORS.equals}`.trim();
    const newTotal = calculate(equationToUse);

    setEquation(newEquation);
    setTotal(newTotal);
    setCurrentValue(newTotal.toString());
    setLastOperator(OPERATORS.equals);
  };

  const onOperatorButtonClick = (key: string): void => {
    if (lastOperator !== key) {
      const newEquation = `${total > 0 ? `${total} ${key}` : `${equation} ${currentValue} ${key}`}`.trim();

      setEquation(newEquation);
      setLastOperator(key);
      if (total > 0) setTotal(0);
    }
  }

  const onNumpadButtonClick = (key: number | '.'): void => {
    const newValue = lastOperator !== '' || (currentValue === '0' && key !== '.');
    const newCurrentValue = newValue ? `${key === '.' ? 0 : ''}${key.toString()}`  : `${currentValue}${key}`

    setCurrentValue(parseFloat(newCurrentValue).toString());
    setLastOperator('');

    if (newValue && total > 0) {
      setTotal(0);
      setEquation('');
    }
  };

  return (
    <Calculator>
      <Display equation={equation} currentValue={currentValue} />
      <Keypad>
        <OperatorButton type="plus" onClick={() => onOperatorButtonClick(OPERATORS.plus)} />
        <OperatorButton type="minus" onClick={() => onOperatorButtonClick(OPERATORS.minus)} />
        <OperatorButton type="multiple" onClick={() => onOperatorButtonClick(OPERATORS.multiple)} />
        <OperatorButton type="divide" onClick={() => onOperatorButtonClick(OPERATORS.divide)} />

        <NumPadButton value={1} onClick={() => onNumpadButtonClick(1)} />
        <NumPadButton value={2} onClick={() => onNumpadButtonClick(2)} />
        <NumPadButton value={3} onClick={() => onNumpadButtonClick(3)} />
        <NumPadButton value={4} onClick={() => onNumpadButtonClick(4)} />
        <NumPadButton value={5} onClick={() => onNumpadButtonClick(5)} />
        <NumPadButton value={6} onClick={() => onNumpadButtonClick(6)} />
        <NumPadButton value={7} onClick={() => onNumpadButtonClick(7)} />
        <NumPadButton value={8} onClick={() => onNumpadButtonClick(8)} />
        <NumPadButton value={9} onClick={() => onNumpadButtonClick(9)} />
        <NumPadButton value={0} onClick={() => onNumpadButtonClick(0)} />
        <NumPadButton value="." onClick={() => onNumpadButtonClick('.')} />
        <NumPadButton value="C" onClick={clear} />

        <EqualsButton onClick={equals} />
      </Keypad>
    </Calculator>
  );
}

export default App;
