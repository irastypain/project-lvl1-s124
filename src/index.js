import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './lib/qa';

const askUserName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => readlineSync.question('Your answer: ');

const welcome = 'Welcome to the Brain Games!';
const greeting = userName => `Hello, ${userName}!`;
const losing = userName => `Let's try again, ${userName}!`;
const congratulate = userName => `Congratulations, ${userName}!`;

const runGame = (description, generateQA) => {
  console.log(welcome);
  console.log(`${description}\n`);

  const userName = askUserName();
  console.log(greeting(userName));

  const playGame = (countRounds = 3) => {
    const newRound = (passedRounds) => {
      if (passedRounds === countRounds) {
        return true;
      }

      const qa = generateQA();
      console.log(`\nQuestion: ${getQuestion(qa)}`);

      const answer = askAnswer();
      const correctAnswer = getAnswer(qa);

      if (correctAnswer === answer) {
        console.log('Correct!');
        return newRound(passedRounds + 1);
      }

      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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
  greeting,
  runGame,
  welcome,
};
