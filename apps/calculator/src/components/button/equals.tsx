import React, { ReactElement } from 'react';

import Button from './button';

interface iEqualsButton {
  onClick: () => void;
}

export default function EqualsButton(props: iEqualsButton): ReactElement {
  const { onClick } = props;
  const text: string = '=';

  return (
    <Button className="equals" onClick={onClick}>
      {text}
    </Button>
  );
}
