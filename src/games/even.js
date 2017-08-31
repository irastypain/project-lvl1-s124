import { generateNumber, makeQA, runGame } from '..';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const number = generateNumber(minNumber, maxNumber);
    const expectedAnswer = (number % 2) === 0 ? 'yes' : 'no';

    return makeQA(number, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
