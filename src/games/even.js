import { generateNumber, makeQuestion, runGame } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 1000;
    const number = generateNumber(minNumber, maxNumber);
    const expectedAnswer = (number % 2) === 0 ? 'yes' : 'no';

    return makeQuestion(number, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
