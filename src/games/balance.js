import { generateNumber, makeQuestion, runGame } from '..';

const balance = (number) => {
  const iter = (acc, sumDigits, countDigits) => {
    if (countDigits === 0) {
      return acc;
    }
    const newDigit = Math.trunc(sumDigits / countDigits);
    return iter([...acc, newDigit], sumDigits - newDigit, countDigits - 1);
  };

  const digits = Array.from(String(number), Number);
  const sumDigits = digits.reduce((sum, digit) => sum + digit, 0);

  return iter([], sumDigits, digits.length).join('');
};

export default () => {
  const description = 'Balance the given number.';
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 10000;
    const number = generateNumber(minNumber, maxNumber);
    const expectedAnswer = balance(number);

    return makeQuestion(number, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
