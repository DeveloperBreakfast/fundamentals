import { input } from './utils/input.js';

const valor = await input('Ingrese un número: ');
const entero = parseInt(valor, 10);

if (entero % 2 === 0) {
  console.log('Su número es par');
} else {
  console.log('Su número es impar');
}