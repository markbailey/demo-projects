import IObjectKeys from './IObjectKeys';

export interface IAltOperatorValues extends IObjectKeys {
  multiple: string;
  divide: string;
}

export default interface IOperatorButton {
  type: string;
  value: string;
  onClick: (t: string) => void;
}
