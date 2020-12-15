import React, { ReactElement } from 'react';

import Button from './button';
import INumPadButton, { INumPadClasses } from '../../interfaces/INumPadButton';

const NUMPAD_CLASSES: INumPadClasses = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'none',
  0: 'zero',
  '.': 'decimal',
  C: 'clear',
};

export default function NumPadButton(props: INumPadButton): ReactElement {
  const { value, onClick } = props;
  const valueClass: string = NUMPAD_CLASSES[value];
  return (
    <Button className={`numpad ${valueClass}`} onClick={() => onClick(value.toString())}>
      {value}
    </Button>
  );
}
