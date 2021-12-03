import { input } from './utils/input.js';

const num = parseInt(await input('Ingrese un numero: '), 10);
let multiplayer = 1;

for (let pow2 = 1; pow2 <= num; pow2++){
    console.log(multiplayer *= 2);
}