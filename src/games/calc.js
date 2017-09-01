import { car, cdr } from 'hexlet-pairs';
import { runGame } from '..';
import { makeQA } from '../lib/qa';
import { getRandomInt, getRandomOperation } from '../lib/math';

export default () => {
  const description = 'What is the result of the expression?';
  const generateQA = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const firstNumber = getRandomInt(minNumber, maxNumber);
    const secondNumber = getRandomInt(minNumber, maxNumber);
    const operation = getRandomOperation();

    const question = `${firstNumber} ${car(operation)} ${secondNumber}`;
    const answer = cdr(operation)(firstNumber, secondNumber);

    return makeQA(question, answer);
  };

  runGame(description, generateQA);
};
