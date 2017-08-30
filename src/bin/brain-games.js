#!/usr/bin/env node

import { welcome, askUserName, greeting } from '..';

console.log(`${welcome}\n`);
const userName = askUserName();
console.log(greeting(userName));
