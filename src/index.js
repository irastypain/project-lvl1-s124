import readlineSync from 'readline-sync';

export const askUserName = () => readlineSync.question('May I have your name? ');

export const printGreeting = userName => console.log(`Hello, ${userName}!`);
