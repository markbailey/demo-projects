import IOperators from '../interfaces/IOperators';
import ICalculation from '../interfaces/ICalculation';

export const OPERATORS: IOperators = {
  plus: '+',
  minus: '-',
  multiple: '*',
  divide: '/',
  equals: '=',
};

const calculation: ICalculation = {
  plus: (a: number, b: number): number => a + b,
  minus: (a: number, b: number): number => a - b,
  multiple: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number => a / b,
}

export default function (equation: string): number {
  const segments: string[] = equation.split(' ');
  let c: number = 0;

  return segments.reduce((total, current, i) => {
    c++;

    switch (current) {
      case OPERATORS.plus:
      case OPERATORS.minus:
      case OPERATORS.multiple:
      case OPERATORS.divide:
        const fn = Object.keys(calculation).find(key => OPERATORS[key] === current);

        if (fn) {
          const sum = calculation[fn];
          return sum(total, parseFloat(segments[c]));
        }

        return total;
      default:
        return i === 0 ? parseFloat(current) : total;
    }
  }, 0);
}
