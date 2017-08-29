import { cons, car, cdr } from 'hexlet-pairs';
import { runGame, askAnswer, printEmptyLine, YOU_WIN, GAME_OVER } from '..';

const makeQuestion = (question, answer) => cons(question, answer);
const getText = question => car(question);
const getAnswer = question => cdr(question);
const checkAnswer = (question, answer) => getAnswer(question) === answer;

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 1000;
  const number = generateNumber(minNumber, maxNumber);
  const expectedAnswer = (number % 2) === 0 ? 'yes' : 'no';

  return makeQuestion(number, expectedAnswer);
};

// eslint-disable-next-line no-unused-vars
const game = (userName) => {
  const countQuestions = 3;
  const newStep = (passedQuestions) => {
    if (passedQuestions === countQuestions) {
      return YOU_WIN;
    }

    const question = generateQuestion();
    printEmptyLine();
    console.log(`Question: ${getText(question)}`);

    const answer = askAnswer();
    if (checkAnswer(question, answer)) {
      console.log('Correct!');
      return newStep(passedQuestions + 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(question)}'.`);
    return GAME_OVER;
  };

  return newStep(0);
};

export default () => {
  runGame(description, game);
};
