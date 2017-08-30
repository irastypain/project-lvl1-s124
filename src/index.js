import readlineSync from 'readline-sync';

export const askUserName = () => readlineSync.question('May I have your name? ');
export const askAnswer = () => readlineSync.question('Your answer: ');

export const victory = 'victory';
export const defeat = 'defeat';

export const welcome = 'Welcome to the Brain Games!';
export const greeting = userName => `Hello, ${userName}!`;
export const losing = userName => `Let's try again, ${userName}!`;
export const congratulate = userName => `Congratulations, ${userName}!`;

export const runGame = (description, game) => {
  console.log(welcome);
  console.log(`${description}\n`);

  const userName = askUserName();
  console.log(greeting(userName));

  const outcomeGame = game();
  if (outcomeGame === victory) {
    console.log(`\n${congratulate(userName)}`);
  } else if (outcomeGame === defeat) {
    console.log(`\n${losing(userName)}`);
  }
};
