import React, { ReactChild, ReactChildren, ReactElement } from 'react';

interface iButton {
  className: string;
  children: ReactChild | ReactChildren;
  onClick: () => void;
  dangerouslySetInnerHTML?: any;
}

function Button(props: iButton): ReactElement {
  const { children, onClick, ...otherProps } = props;
  return (
    <button {...otherProps} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
