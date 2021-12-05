import { input } from './utils/input.js';

const num = parseInt(await input('Ingrese un numero: '), 10);
let divisor = num;
for (let i = 1; i <= num; i++) {
    if (divisor % i === 0) {
        console.log(divisor / i);
    }
}