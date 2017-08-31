import { car, cdr, cons } from 'hexlet-pairs';
import { generateNumber, makeQuestion, runGame } from '..';

const operations = [
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
];

const getRandomOperation = (ops) => {
  const index = generateNumber(0, ops.length);
  return operations[index];
};

export default () => {
  const description = 'What is the result of the expression?';
  const generateQuestion = () => {
    const minNumber = 1;
    const maxNumber = 100;
    const firstNumber = generateNumber(minNumber, maxNumber);
    const secondNumber = generateNumber(minNumber, maxNumber);
    const operation = getRandomOperation(operations);
    const expectedAnswer = cdr(operation)(firstNumber, secondNumber);

    return makeQuestion(`${firstNumber} ${car(operation)} ${secondNumber}`, expectedAnswer);
  };

  runGame(description, generateQuestion);
};
