import { input } from './utils/input.js';

let notaCertamen1 = await input('Ingrese nota certamen 1: ');
let notaCertamen2 = await input('Ingrese nota certamen 2: ');
let notaLaboratorio = await input('Ingrese nota laboratorio: ');

notaCertamen1 = parseInt(notaCertamen1, 10);
notaCertamen2 = parseInt(notaCertamen2, 10);
notaLaboratorio = parseInt(notaLaboratorio, 10);

let notaNecesaria = (((60 - notaLaboratorio * 0.3) * 3) / 0.7 - notaCertamen1 - notaCertamen2);

notaNecesaria = parseInt(notaNecesaria, 10);

console.log('Necesita nota ' + notaNecesaria + ' en el certamen 3')