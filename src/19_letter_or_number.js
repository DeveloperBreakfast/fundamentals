import { input } from './utils/input.js';
import process from 'process'

const letterOrNumber = await input('Ingrese un caracter: ');

if (letterOrNumber.length !== 1) {
    console.log('Solo debe de ingresar un caractér.');
    process.exit();
  }
  
  const characterCode = letterOrNumber.charCodeAt(0);
  
  if (characterCode >= 48 && characterCode <= 57) {
    console.log('El caractér es un número.');
    process.exit();
  }

  if (characterCode >= 65 && characterCode <= 90) {
      console.log('Es letra mayúscula.');
      process.exit();
  }
  
  if (characterCode >= 97 && characterCode <= 122) {
    console.log('Es letra minúscula');
    process.exit();
  }

  if (characterCode >= 32 && characterCode <= 47) {
      console.log('No es letra ni número');
      process.exit();
  }