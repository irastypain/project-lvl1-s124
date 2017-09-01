import { runGame } from '..';
import { makeQA } from '../lib/qa';
import { getRandomInt, balanceInt } from '../lib/math';

export default () => {
  const description = 'Balance the given number.';
  const generateQA = () => {
    const minNumber = 1;
    const maxNumber = 10000;
    const number = getRandomInt(minNumber, maxNumber);

    const question = `${number}`;
    const answer = balanceInt(number);

    return makeQA(question, answer);
  };

  runGame(description, generateQA);
};
