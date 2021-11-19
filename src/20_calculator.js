import { input } from './utils/input.js';
import process from 'process'

const value1 = parseInt(await input('Ingrese un número: '), 10);
const symbol = await input('Ingrese un símbolo: ');
const value2 = parseInt(await input('Ingrese un número: '), 10);

if (symbol.charCodeAt(0) === 43){
    console.log(`${value1} ${symbol} ${value2} = ${value1 + value2}`);
    process.exit();
}

if(symbol.charCodeAt(0) === 45){
    console.log(`${value1} ${symbol} ${value2} = ${value1 - value2}`);
    process.exit();
}

if(symbol.charCodeAt(0) === 42){
    console.log(`${value1} ${symbol} ${value2} = ${value1 * value2}`);
    process.exit(0);
}

if(symbol.charCodeAt(0) === 47){
    console.log(`${value1} ${symbol} ${value2} = ${value1 / value2}`);
    process.exit(0);
}

if(symbol.charCodeAt(2) === 42){
    console.log(`${value1} ${symbol} ${value2} = ${value1 ** value2}`);
    process.exit(0);
}

