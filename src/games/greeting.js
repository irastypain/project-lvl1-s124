import { runGame, greeting, NOTHING } from '..';

const description = '';

const game = (userName) => {
  console.log(greeting(userName));
  return NOTHING;
};

export default () => {
  runGame(description, game);
};
