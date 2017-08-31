import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askUserName = () => readlineSync.question('May I have your name? ');
const askAnswer = () => readlineSync.question('Your answer: ');

const victory = 'victory';
const defeat = 'defeat';

const welcome = 'Welcome to the Brain Games!';
const greeting = userName => `Hello, ${userName}!`;
const losing = userName => `Let's try again, ${userName}!`;
const congratulate = userName => `Congratulations, ${userName}!`;

const makeQuestion = (question, answer) => cons(String(question), String(answer));
const getText = question => car(question);
const getAnswer = question => cdr(question);
const checkAnswer = (question, answer) => getAnswer(question) === answer;

const runGame = (description, generateQuestion) => {
  console.log(welcome);
  console.log(`${description}\n`);

  const userName = askUserName();
  console.log(greeting(userName));

  const playGame = (countRounds = 3) => {
    const newRound = (passedRounds) => {
      if (passedRounds === countRounds) {
        return victory;
      }

      const question = generateQuestion();
      console.log(`\nQuestion: ${getText(question)}`);

      const answer = askAnswer();
      if (checkAnswer(question, answer)) {
        console.log('Correct!');
        return newRound(passedRounds + 1);
      }

      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(question)}'.`);
      return defeat;
    };

    return newRound(0);
  };

  const outcomeGame = playGame();

  if (outcomeGame === victory) {
    console.log(`\n${congratulate(userName)}`);
  } else if (outcomeGame === defeat) {
    console.log(`\n${losing(userName)}`);
  }
};

export {
  askUserName,
  generateNumber,
  greeting,
  makeQuestion,
  runGame,
  welcome,
};
