import { runGame } from '..';
import { makeQA } from '../lib/qa';
import { getRandomInt, isPrime } from '../lib/math';

export default () => {
  const description = 'Answer "yes" if number prime otherwise answer "no"';
  const generateQA = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const number = getRandomInt(minNumber, maxNumber);

    const question = `${number}`;
    const answer = isPrime(number) ? 'yes' : 'no';

    return makeQA(question, answer);
  };

  runGame(description, generateQA);
};
