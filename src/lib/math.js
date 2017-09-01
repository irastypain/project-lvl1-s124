import { cons } from 'hexlet-pairs';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const getRandomOperation = () => {
  const operations = [
    cons('+', (a, b) => a + b),
    cons('-', (a, b) => a - b),
    cons('*', (a, b) => a * b),
  ];
  const index = getRandomInt(0, operations.length);

  return operations[index];
};

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const balanceInt = (number) => {
  const iter = (acc, sumDigits, countDigits) => {
    if (countDigits === 0) {
      return acc;
    }
    const newDigit = Math.trunc(sumDigits / countDigits);
    return iter([...acc, newDigit], sumDigits - newDigit, countDigits - 1);
  };

  const digits = Array.from(String(number), Number);
  const sumDigits = digits.reduce((sum, digit) => sum + digit, 0);

  return iter([], sumDigits, digits.length).join('');
};

export const genArithmeticProgression = (a, d, countItems) => {
  const iter = (progression, n) => {
    if (n > countItems) {
      return progression;
    }
    const nextItem = a + ((n - 1) * d);
    return iter([...progression, nextItem], n + 1);
  };

  return iter([], 1);
};

export const smallestDivisor = (number) => {
  const nextDivisor = (divisor) => {
    if (divisor === 2) {
      return 3;
    }
    return divisor + 2;
  };

  const findDivisor = (testDivisor) => {
    if ((testDivisor ** 2) > number) {
      return number;
    } else if ((number % testDivisor) === 0) {
      return testDivisor;
    }

    return findDivisor(nextDivisor(testDivisor));
  };

  const startDivisor = 2;
  return findDivisor(startDivisor);
};

export const isPrime = number => number === smallestDivisor(number);
