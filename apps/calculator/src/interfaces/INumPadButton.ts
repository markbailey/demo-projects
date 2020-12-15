import IObjectKeys from './IObjectKeys';

export interface INumPadClasses extends IObjectKeys {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  0: string;
  '.': string;
  C: string;
}

export default interface INumPadButton {
  value: string | number;
  onClick: (v: string) => void;
}
