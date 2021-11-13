const { input } = require('./utils/input');

async function main() {
  const nota01 = await input('Primera nota: ');
  const nota02 = await input('Segunda nota: ');
  const nota03 = await input('Tercera nota: ');
  const nota04 = await input('Cuarta nota: ');
  console.log('El promedio es: ' + nota01 + nota02 + nota03 + nota04);
}

main();
