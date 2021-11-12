// Prompt the user its birthdate year and calculate its age by substracting the
// current year against the provided year

const { input } = require('./utils/input');

async function main() {
  const yearBorn = await input('Enter birthdate year: ');
  const yearToday = new Date().getFullYear();

  console.log('You are ' + yearToday - yearBorn + ' years old!');
}

main();
