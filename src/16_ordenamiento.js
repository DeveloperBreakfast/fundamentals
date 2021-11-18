import { input } from './utils/input.js';

const firstNumber = parseInt(await input('Ingrese numero: '), 10);
const secondNumber = parseInt(await input('Ingrese numero: '), 10);

if (firstNumber > secondNumber){
    console.log(firstNumber + ' ' + secondNumber);
} else {
    console.log(secondNumber + ' ' + firstNumber);
}
