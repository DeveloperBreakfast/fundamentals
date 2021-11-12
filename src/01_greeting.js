// Prompt a user its name and greets the user mentioning the provided name

const { input } = require('./utils/input');

async function main() {
  const name = await input("Enter your name: ");

  console.log(`Hello ${name}!`);
}

main();
