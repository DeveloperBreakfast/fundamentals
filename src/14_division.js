import { input } from './utils/input.js';
let dividendo = await input('Dividendo: ');
let divisor = await input('Divisor: ');

dividendo = parseInt(dividendo, 10);
divisor = parseInt(divisor, 10);

const cociente = dividendo / divisor;
const resto = dividendo % divisor;

if (resto === 0){
    console.log('La división es exacta.');
    console.log('Cociente: ' + cociente);
    console.log('Resto: ' + resto)
} else {
    console.log('La division no es exacta.');
    console.log('Cociente: ' + cociente);
    console.log('Resto: ' + resto);
}