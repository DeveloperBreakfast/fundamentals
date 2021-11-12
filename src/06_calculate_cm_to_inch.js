const { input } = require('./utils/input');

async function main() {
 const cm = await input('Ingrese longitud: ');
 const inch = cm / 2.54;
 console.log(cm + 'cm =' + inch.toFixed(2) + 'in');
}

main();
