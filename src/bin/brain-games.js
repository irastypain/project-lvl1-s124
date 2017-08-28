#!/usr/bin/env node

import { askUserName, printGreeting } from '..';

console.log('Welcome to the Brain Games!');

const userName = askUserName();
printGreeting(userName);
