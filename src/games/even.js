import { runGame } from '..';
import { makeQA } from '../lib/qa';
import { getRandomInt } from '../lib/math';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const generateQA = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const number = getRandomInt(minNumber, maxNumber);

    const question = `${number}`;
    const answer = (number % 2) === 0 ? 'yes' : 'no';

    return makeQA(question, answer);
  };

  runGame(description, generateQA);
};
