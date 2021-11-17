import { input } from './utils/input.js';

let horaActual = await input('Hora actual: ');
let cantidadDeHoras = await input('Cantidad de horas: ');

horaActual = parseInt(horaActual, 10);
cantidadDeHoras = parseInt(cantidadDeHoras, 10);

const horaFutura = (horaActual + cantidadDeHoras) % 12;

console.log(`En ${cantidadDeHoras} horas, el reloj marcara las ${horaFutura}`);

