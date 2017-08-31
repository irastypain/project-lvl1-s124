#!/usr/bin/env node

import { askUserName, greeting, welcome } from '..';

console.log(`${welcome}\n`);
const userName = askUserName();
console.log(greeting(userName));
