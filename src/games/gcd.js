import { runGame } from '..';
import { makeQA } from '../lib/qa';
import { getRandomInt, gcd } from '../lib/math';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const generateQA = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const firstNumber = getRandomInt(minNumber, maxNumber);
    const secondNumber = getRandomInt(minNumber, maxNumber);

    const question = `${firstNumber} ${secondNumber}`;
    const answer = gcd(firstNumber, secondNumber);

    return makeQA(question, answer);
  };

  runGame(description, generateQA);
};
