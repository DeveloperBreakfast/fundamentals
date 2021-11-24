import { input } from './utils/input.js';
import process from 'process';

const height = parseFloat(await input('Ingrese su estatura en metros: '), 10);
const weight = parseFloat(await input('Ingrese su peso en kilogramos: '), 10);
const age = parseInt(await input('Ingrese su edad: '), 10);

const imc = weight / Math.pow(height, 2);

if (imc < 22.0 && age < 45) {
    console.log('Su IMC es bajo');
    process.exit();
}

if (imc < 22.0 && age >= 45) {
    console.log('Su IMC es medio');
    process.exit();
}

if (imc >= 22.0 && age < 45) {
    console.log('Su IMC es medio');
    process.exit();
}

if (imc >= 22.0 && age >= 45) {
    console.log('Su IMC es alto');
    process.exit();
}