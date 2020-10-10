import React, { ReactElement } from 'react';

import Button from './button';
import { OPERATORS } from '../../utils/calculate';

import IOperatorButton, {
  IAltOperatorValues,
} from '../../interfaces/IOperatorButton';

const ALT_OPERATOR_VALUES: IAltOperatorValues = {
  multiple: '&times;',
  divide: '&#247;',
};

function OperatorButton(props: IOperatorButton): ReactElement {
  const { type, onClick } = props;
  const operatorValue = OPERATORS[type];
  const altValue = ALT_OPERATOR_VALUES[type] || null;

  return (
    <Button
      className="operator"
      onClick={() => onClick(operatorValue)}
      dangerouslySetInnerHTML={altValue ? { __html: altValue } : null}
    >
      {altValue ? null : operatorValue}
    </Button>
  );
}

export default OperatorButton;
