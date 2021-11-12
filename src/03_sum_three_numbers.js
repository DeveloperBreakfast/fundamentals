// Prompts 3 numbers and sums them together, then prints the total to the
// console

import { input } from './utils/input';

let total = 0;

for (let i = 0; i < 3; i++) {
  const number = await input('Enter a number: ');

  total += Number(number);
}

console.log('Total is: ' + total);
