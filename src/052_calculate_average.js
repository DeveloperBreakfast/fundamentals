import { input } from './utils/input.js';
     let promedio = 0;
     let promedioTotal = (nota01 + nota02 + nota03 + nota04);
    const nota01 = await input ('Primera nota: ');
    const nota02 = await input ('Segunda nota: ');
    const nota03 = await input ('Tercera nota: ');
    const nota04 = await input ('Cuarta nota: ');

    promedio += parseInt(promedioTotal, 10);

    console.log('El promedio es: ' + promedio);
  
