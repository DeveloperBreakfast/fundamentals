import { input } from './utils/input.js';

let primeraPalabra = await input('Palabra 1: ');
let segundaPalabra = await input('Palabra 2: ');

let palabra1Length = primeraPalabra.length;
let palabra2Length = segundaPalabra.length;

const palabra1Mayor = palabra1Length - palabra2Length;
const palabra2Mayor = palabra2Length - palabra1Length;

if (palabra1Length > palabra2Length){
    if(palabra1Mayor === palabra2Mayor){
        console.log('Las dos palabras tienen el mismo largo');
    } else 
    console.log(`La palabra ${primeraPalabra} tiene ${palabra1Mayor} letras mas que ${segundaPalabra}`);
} else {
    console.log(`La palabra ${segundaPalabra} tiene ${palabra2Mayor} letras mas que ${primeraPalabra}`);
}


