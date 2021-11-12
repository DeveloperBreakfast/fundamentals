// Escriba un programa que reciba como entrada el radio de un círculo y entregue
// como salida su perímetro y su área

const { input } = require('./utils/input');

async function main() {
  const radius = await input('Ingrese el radio: ');
  const perimeter = 2 * (Math.PI * radius);

  console.log('Perimetro: ' + perimeter);
}

main();
