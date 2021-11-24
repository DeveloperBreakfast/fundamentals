import { input } from './utils/input.js';
import process from 'process'

const player1 = parseInt(await input('Juegos ganados por A: ', 10));
const player2 = parseInt(await input('Juegos ganados por B: ', 10));

if (player1 > 7 || player2 > 7 ) {
    console.log('Invalido');
    process.exit()
}

if (player1 < 6 && player2 < 6) {
    console.log('Aun no termina');
    process.exit();
}

if (player1 === 7 && player2 === 7 ) {
    console.log('Invalido');
    process.exit();
}

if (player1 === 7 && player2 === 5 || player1 === 7 && player2 === 6) {
    console.log('Gano A');
    process.exit();
}

if (player2 === 7 && player1 === 5 || player2 === 7 && player1 === 6) {
    console.log('Gano B');
    process.exit();
}

if (player1 === 6 && player2 <= 4) {
    console.log('Gano A');
    process.exit();
}

if (player2 === 6 && player1 <= 4) {
    console.log('Gano B');
    process.exit();
}

if (player1 === 7 && player2 < 5 || player2 === 7 && player1 < 5) {
    console.log('Invalido');
    process.exit();
}
