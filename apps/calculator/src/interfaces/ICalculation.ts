import IObjectKeys from '../interfaces/IObjectKeys';

interface ICalculation extends IObjectKeys {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
  multiple: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

export default ICalculation;
