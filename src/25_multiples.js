import { input } from './utils/input.js';
const value = parseInt(await input('Ingrese un numero: '), 10);

for ( let multiple = 1; multiple <= 10; multiple++) {
console.log(`${value} x ${multiple} = ${value * multiple}`);
}