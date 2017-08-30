import { cons, car, cdr } from 'hexlet-pairs';
import { runGame, askAnswer, victory, defeat } from '..';

const makeQuestion = (question, answer) => cons(question, answer);
const getText = question => car(question);
const getAnswer = question => cdr(question);
const checkAnswer = (question, answer) => getAnswer(question) === answer;

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 1000;
  const number = generateNumber(minNumber, maxNumber);
  const expectedAnswer = (number % 2) === 0 ? 'yes' : 'no';

  return makeQuestion(number, expectedAnswer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const countQuestions = 3;
  const newStep = (passedQuestions) => {
    if (passedQuestions === countQuestions) {
      return victory;
    }

    const question = generateQuestion();
    console.log(`\nQuestion: ${getText(question)}`);

    const answer = askAnswer();
    if (checkAnswer(question, answer)) {
      console.log('Correct!');
      return newStep(passedQuestions + 1);
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(question)}'.`);
    return defeat;
  };

  return newStep(0);
};

export default () => {
  runGame(description, game);
};
