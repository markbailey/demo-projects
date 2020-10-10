import React, { ReactElement } from 'react';

import Button from './button';

interface iEqualsButton {
  onClick: () => void;
}

export function EqualsButton(props: iEqualsButton): ReactElement {
  const { onClick } = props;
  const text = '=';

  return (
    <Button className="equals" onClick={onClick}>
      {text}
    </Button>
  );
}

export default EqualsButton;
