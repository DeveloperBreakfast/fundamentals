import { input } from './utils/input.js';

const firstNumber = parseInt(await input('Ingrese numero: '), 10);
const secondNumber = parseInt(await input('Ingrese numero: '), 10);
const thirdNumber = parseInt(await input('Ingrese numero: '), 10);
const fourthNumber = parseInt(await input('Ingrese numero: '), 10);


const numerosOrdenados = [firstNumber, secondNumber, thirdNumber, fourthNumber];
numerosOrdenados.sort(function(a, b) {
    return a - b;
});
 
console.log(numerosOrdenados);