import { match } from 'assert/strict';
import { input } from './utils/input.js';
let total = 0;

const catetoa = await input('Ingrese cateto a: ');
const catetob = await input('Ingrese cateto b: ');

total += parseFloat(catetoa, 10);
total += parseFloat(catetob, 10);

const hipotenusa1 = (Math.pow(catetoa, 2 ));
const hipotenusa2 = (Math.pow(catetob, 2));
const hipotenusaelevada = (hipotenusa1 + hipotenusa2);

const hipotenusa = Math.sqrt(hipotenusaelevada);

console.log('La hipotenusa es ' + (hipotenusa.toFixed(2)));
