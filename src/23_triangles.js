import { input } from './utils/input.js';
import process from 'process';

const ladoA = parseInt(await input('Ingrese a: '), 10);
const ladoB = parseInt(await input('Ingrese b: '), 10);
const ladoC = parseInt(await input('Ingrese c: '), 10);

if (ladoA + ladoB < ladoC || ladoB + ladoC < ladoA || ladoC + ladoA < ladoB) {
    console.log('No es un triangulo valido');
    process.exit();
}

if (ladoA === ladoB && ladoA === ladoC) {
    console.log('El triangulo es equilatero');
    process.exit();
}

if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    console.log('El triangulo es isoceles');
    process.exit();
}

if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    console.log('El triangulo es escaleno');
    process.exit();
}

