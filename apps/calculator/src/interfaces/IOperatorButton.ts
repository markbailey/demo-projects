import IObjectKeys from './IObjectKeys';

interface IOperatorButton {
  type: string;
  onClick: (t: string) => void;
}

export interface IAltOperatorValues extends IObjectKeys {
  multiple: string;
  divide: string;
}

export default IOperatorButton;
