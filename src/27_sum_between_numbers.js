import { input } from './utils/input.js';

const numOne = parseInt(await input('Ingrese num: '), 10);
const numTwo = parseInt(await input('Ingrese num: '), 10);

let total = 0

for (let i = numOne + 1; i < numTwo; i++) {
 total += i;   
}

console.log(`La suma es ${total}`);