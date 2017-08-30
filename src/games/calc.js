import { cons, car, cdr } from 'hexlet-pairs';
import { runGame, askAnswer, victory, defeat } from '..';

const makeQuestion = (question, answer) => cons(question, answer);
const getText = question => car(question);
const getAnswer = question => cdr(question);
const checkAnswer = (question, answer) => getAnswer(question) === answer;

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const sum = cons('+', (a, b) => a + b);
const sub = cons('-', (a, b) => a - b);
const mul = cons('*', (a, b) => a * b);

const getRandomOperation = (...operations) => {
  const index = generateNumber(0, operations.length);
  return operations[index];
};

const generateQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const number1 = generateNumber(minNumber, maxNumber);
  const number2 = generateNumber(minNumber, maxNumber);
  const operation = getRandomOperation(sum, sub, mul);
  const expectedAnswer = cdr(operation)(number1, number2);

  return makeQuestion(`${number1} ${car(operation)} ${number2}`, String(expectedAnswer));
};

const description = 'What is the result of the expression?';

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

