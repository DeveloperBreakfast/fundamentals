// Prompts 3 numbers and sums them together, then prints the total to the
// console

const { input } = require('./utils/input');

async function main() {
  let total = 0;

  for (let i = 0; i < 3; i++) {
    const number = await input('Enter a number: ');

    total += parseInt(number, 10);
  }

  console.log('Total is: ' + total);
}

main();
