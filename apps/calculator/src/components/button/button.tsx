import React, { ReactChild, ReactChildren, ReactElement } from 'react';

interface iButton {
  className: string;
  children: ReactChild | ReactChildren | undefined;
  onClick: () => void;
  dangerouslySetInnerHTML?: any;
}

export default function Button(props: iButton): ReactElement {
  const { children, onClick, ...otherProps } = props;
  return (
    <button {...otherProps} onClick={onClick}>
      {children}
    </button>
  );
}

