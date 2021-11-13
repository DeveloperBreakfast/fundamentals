import { input } from './utils/input.js';

const value = await input('Ingrese un numero: ');
const inverted = value.split('').reverse().join('');

console.log(inverted);
