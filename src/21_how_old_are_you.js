import process from 'process';
import { input } from './utils/input.js';

const day = parseInt(await input('Ingrese dia: '), 10);
const month = parseInt(await input('Ingrese mes: '), 10);
const year = parseInt(await input('Ingrese año: '), 10);
const today = new Date();

const yearsOld = today.getFullYear() - year;

if (today.getMonth() > month ||
  (today.getMonth() === month && today.getDate() > day)) {
  console.log(`Su edad es: ${yearsOld}`);
  process.exit();
}

console.log(`Su edad es: ${yearsOld - 1}`);