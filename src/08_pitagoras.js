import { input } from './utils/input.js';
let total = 0;

const catetoA = await input('Ingrese cateto a: ');
const catetoB = await input('Ingrese cateto b: ');

total += parseFloat(catetoA, 10);
total += parseFloat(catetoB, 10);

const hipotenusa1 = (Math.pow(catetoA, 2 ));
const hipotenusa2 = (Math.pow(catetoB, 2));
const hipotenusaElevada = (hipotenusa1 + hipotenusa2);

const hipotenusa = Math.sqrt(hipotenusaElevada);

console.log('La hipotenusa es ' + (hipotenusa.toFixed(2)));
