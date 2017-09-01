import { runGame } from '..';
import { makeQA } from '../lib/qa';
import { getRandomInt, genArithmeticProgression } from '../lib/math';

export default () => {
  const description = 'What number is missing in this progression?';
  const generateQA = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const startNumber = getRandomInt(minNumber, maxNumber);

    const gain = 2;
    const countItems = 10;
    const progressionItems = genArithmeticProgression(startNumber, gain, countItems);

    const startIndex = 0;
    const missingItemIndex = getRandomInt(startIndex, countItems - 1);

    const question = progressionItems.map((item, index) => {
      if (index === missingItemIndex) {
        return '..';
      }
      return String(item);
    }).join(' ');

    const answer = progressionItems[missingItemIndex];

    return makeQA(question, answer);
  };

  runGame(description, generateQA);
};
