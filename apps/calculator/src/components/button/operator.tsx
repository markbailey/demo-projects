import React, { ReactElement } from 'react';

import Button from './button';
import IOperatorButton, {
  IAltOperatorValues,
} from '../../interfaces/IOperatorButton';

const ALT_OPERATOR_VALUES: IAltOperatorValues = {
  multiple: '&times;',
  divide: '&#247;',
};

export default function OperatorButton(props: IOperatorButton): ReactElement {
  const { type, value, onClick } = props;
  const altValue: string = ALT_OPERATOR_VALUES[type];

  return (
    <Button
      className="operator"
      onClick={() => onClick(value)}
      dangerouslySetInnerHTML={{ __html: altValue ?? value }}
    >
      {undefined}
    </Button>
  );
}
