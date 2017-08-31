import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askUserName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => readlineSync.question('Your answer: ');

const welcome = 'Welcome to the Brain Games!';
const greeting = userName => `Hello, ${userName}!`;
const losing = userName => `Let's try again, ${userName}!`;
const congratulate = userName => `Congratulations, ${userName}!`;

const makeQA = (question, answer) => cons(String(question), String(answer));
const getText = question => car(question);
const getAnswer = question => cdr(question);

const runGame = (description, generateQuestion) => {
  console.log(welcome);
  console.log(`${description}\n`);

  const userName = askUserName();
  console.log(greeting(userName));

  const playGame = (countRounds = 3) => {
    const newRound = (passedRounds) => {
      if (passedRounds === countRounds) {
        return true;
      }

      const question = generateQuestion();
      console.log(`\nQuestion: ${getText(question)}`);

      const answer = askAnswer();
      if (getAnswer(question) === answer) {
        console.log('Correct!');
        return newRound(passedRounds + 1);
      }

      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(question)}'.`);
      return false;
    };

    return newRound(0);
  };

  const userWon = playGame();
  if (userWon) {
    console.log(`\n${congratulate(userName)}`);
  } else {
    console.log(`\n${losing(userName)}`);
  }
};

export {
  askUserName,
  generateNumber,
  greeting,
  makeQA,
  runGame,
  welcome,
};
