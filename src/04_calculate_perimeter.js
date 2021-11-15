// Escriba un programa que reciba como entrada el radio de un círculo y entregue
// como salida su perímetro y su área

import { input } from './utils/input.js';

const radius = await input('Ingrese el radio: ');
const perimeter = 2 * (Math.PI * radius);
const area = Math.PI * (radius * radius);
console.log('Perimetro: ' + perimeter);
console.log('Área: ' + area);
