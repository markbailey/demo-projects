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

export default function App(): ReactElement {
  const [equation, setEquation] = useState('');
  const [lastOperator, setLastOperator] = useState('');
  const [total, setTotal] = useState(0);
  const [currentValue, setCurrentValue] = useState('0');

  const onDecimalClick = (): void => {
    if (!currentValue.includes('.')) {
      setCurrentValue(`${currentValue}.`);
      setLastOperator('');
    }
  }

  const onClearClick = (): void => {
    setEquation('');
    setTotal(0);
    setCurrentValue('0');
  };

  const onEqualsClick = (): void => {
    const isValidEquation =  equation.split(' ').find(i => Object.keys(OPERATORS).map(key => OPERATORS[key]).includes(i));
    if (isValidEquation) {
      const equationToUse: string = `${lastOperator === '' ? `${equation} ${currentValue}` : equation.substring(0, equation.length - 1)}`;
      const newEquation: string = `${equationToUse} ${OPERATORS.equals}`.trim();
      const newTotal: number = calculate(equationToUse);

      setEquation(newEquation);
      setTotal(newTotal);
      setCurrentValue(newTotal.toString());
      setLastOperator(OPERATORS.equals);
    }
  };

  const onOperatorButtonClick = (key: string): void => {
    if (lastOperator !== key) {
      const newEquation: string = `${total > 0 ? `${total} ${key}` : `${equation} ${currentValue} ${key}`}`.trim();

      setEquation(newEquation);
      setLastOperator(key);
      if (total > 0) setTotal(0);
    }
  }

  const onNumpadButtonClick = (key: string): void => {
    const isNewValue: boolean = lastOperator !== '' || currentValue === '0';
    const newCurrentValue: string = isNewValue ? key.toString()  : `${currentValue}${key}`;

    setCurrentValue(newCurrentValue);
    setLastOperator('');

    if (isNewValue && total > 0) {
      setTotal(0);
      setEquation('');
    }
  };

  return (
    <Calculator>
      <Display equation={equation} currentValue={currentValue} />
      <Keypad>
        <OperatorButton type="plus" value={OPERATORS.plus} onClick={onOperatorButtonClick} />
        <OperatorButton type="minus" value={OPERATORS.minus} onClick={onOperatorButtonClick} />
        <OperatorButton type="multiple" value={OPERATORS.multiple} onClick={onOperatorButtonClick} />
        <OperatorButton type="divide" value={OPERATORS.divide} onClick={onOperatorButtonClick} />

        <NumPadButton value={1} onClick={onNumpadButtonClick} />
        <NumPadButton value={2} onClick={onNumpadButtonClick} />
        <NumPadButton value={3} onClick={onNumpadButtonClick} />
        <NumPadButton value={4} onClick={onNumpadButtonClick} />
        <NumPadButton value={5} onClick={onNumpadButtonClick} />
        <NumPadButton value={6} onClick={onNumpadButtonClick} />
        <NumPadButton value={7} onClick={onNumpadButtonClick} />
        <NumPadButton value={8} onClick={onNumpadButtonClick} />
        <NumPadButton value={9} onClick={onNumpadButtonClick} />
        <NumPadButton value={0} onClick={onNumpadButtonClick} />
        <NumPadButton value="." onClick={onDecimalClick} />
        <NumPadButton value="C" onClick={onClearClick} />

        <EqualsButton onClick={onEqualsClick} />
      </Keypad>
    </Calculator>
  );
}
