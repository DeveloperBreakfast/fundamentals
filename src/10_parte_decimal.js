import { input } from './utils/input.js';

let number = await input('Ingrese un numero: ');

number = parseFloat(number, 10);

const decimal = Math.abs(number - Math.round(number)).toFixed(2);

console.log(decimal);