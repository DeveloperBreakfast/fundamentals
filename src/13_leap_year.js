import { input } from './utils/input.js';

const year = await input('Ingrese un anno: ');
const leapYear = parseInt(year, 10);

if (leapYear % 4 === 0){
    console.log(year + ' es bisiesto');
} else {
    console.log(year + ' no es bisiesto');
}