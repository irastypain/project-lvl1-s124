import readlineSync from 'readline-sync';

export const askUserName = () => readlineSync.question('May I have your name? ');
export const askAnswer = () => readlineSync.question('Your answer: ');

export const printEmptyLine = () => console.log('');

export const NOTHING = undefined;
export const YOU_WIN = true;
export const GAME_OVER = false;

export const greeting = userName => `Hello, ${userName}!`;
export const losing = userName => `Let's try again, ${userName}!`;
export const congratulate = userName => `Congratulations, ${userName}!`;

export const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  if (description !== '') {
    printEmptyLine();
  }

  const userName = askUserName();
  const result = game(userName);

  if (result === YOU_WIN) {
    printEmptyLine();
    console.log(congratulate(userName));
  } else if (result === GAME_OVER) {
    printEmptyLine();
    console.log(losing(userName));
  }
};
