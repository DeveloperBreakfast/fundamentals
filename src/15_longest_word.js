import { input } from './utils/input.js';
import process from 'process'

const primeraPalabra = await input('Palabra 1: ');
const segundaPalabra = await input('Palabra 2: ');

const palabra1Mayor = primeraPalabra.length - segundaPalabra.length;
const palabra2Mayor = segundaPalabra.length - primeraPalabra.length;
if (primeraPalabra.length === segundaPalabra.length){
    console.log('Las dos palabras tienen el mismo largo');
    process.exit();
}

if (primeraPalabra.length > segundaPalabra.length){ 
    console.log(`La palabra ${primeraPalabra} tiene ${palabra1Mayor} letras mas que ${segundaPalabra}`);
} else {
    console.log(`La palabra ${segundaPalabra} tiene ${palabra2Mayor} letras mas que ${primeraPalabra}`);
}


