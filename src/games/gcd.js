import { generateNumber, makeQuestion, runGame } from '..';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const firstNumber = generateNumber(minNumber, maxNumber);
    const secondNumber = generateNumber(minNumber, maxNumber);
    const expectedAnswer = gcd(firstNumber, secondNumber);

    return makeQuestion(`${firstNumber} ${secondNumber}`, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
