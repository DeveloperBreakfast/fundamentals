import { input } from './utils/input.js';

let value = await input('Ingrese un numero: ');
let result = '';
let valueLength = value.length;

value = parseInt(value, 10);

for (let i = 0; i < valueLength; i++) {
  result += (value % 10) + Math.trunc();
  value /= 10;
}

console.log(result);
