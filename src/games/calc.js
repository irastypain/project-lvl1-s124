import { car, cdr, cons } from 'hexlet-pairs';
import { generateNumber, makeQuestion, runGame } from '..';

const sum = cons('+', (a, b) => a + b);
const sub = cons('-', (a, b) => a - b);
const mul = cons('*', (a, b) => a * b);

const getRandomOperation = (operations) => {
  const index = generateNumber(0, operations.length);
  return operations[index];
};

const description = 'What is the result of the expression?';

export default () => {
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const firstNumber = generateNumber(minNumber, maxNumber);
    const secondNumber = generateNumber(minNumber, maxNumber);
    const operation = getRandomOperation([sum, sub, mul]);
    const expectedAnswer = cdr(operation)(firstNumber, secondNumber);

    return makeQuestion(`${firstNumber} ${car(operation)} ${secondNumber}`, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
