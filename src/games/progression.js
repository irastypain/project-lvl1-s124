import { generateNumber, makeQA, runGame } from '..';

const generateProgression = (a, d, countItems) => {
  const iter = (progression, n) => {
    if (n > countItems) {
      return progression;
    }
    const nextItem = a + ((n - 1) * d);
    return iter([...progression, nextItem], n + 1);
  };
  return iter([], 1);
};

export default () => {
  const description = 'What number is missing in this progression?';
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const startNumber = generateNumber(minNumber, maxNumber);
    const gain = 2;
    const countItems = 10;
    const progressionItems = generateProgression(startNumber, gain, countItems);
    const missingItemIndex = generateNumber(0, countItems - 1);

    const question = progressionItems.map((item, index) => {
      if (index === missingItemIndex) {
        return '..';
      }
      return String(item);
    }).join(' ');

    const expectedAnswer = progressionItems[missingItemIndex];

    return makeQA(question, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
