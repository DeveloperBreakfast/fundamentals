# fundamentals
Exercises to learn the fundamentals of programming for total beginners using
NodeJS

## Motivation

Resolve logic intensive exercises where students are able to focus on
programming fundamentals.

## Setup

```bash
# clone this repository
git clone https://github.com/DeveloperBreakfast/fundamentals.git

# change the directory
cd ./fundamentals

# install dependencies
npm install
```

## Usage

Exercises relies under the `src/` directory, every exercise must be prefixed
with the number (Ex. `03`) and its name in snake case (Ex. `03_sum_three.js`).

The `src/utils` directory contains utilities for exercises like functions to
read user input.

### Example Exercise

```javascript
// Prompt a user its name and greets the user mentioning the provided name

const { input } = require('./utils/input');

async function main() {
  const name = await input("Enter your name: ");

  console.log(`Hello ${name}!`);
}

main();
```

### Considerations

- You must describe the exercise as comments on the first lines
- You may need to read user input, you can import the `input` function from
`./utils/input`.
- As we are using the `async`/`await` syntax, is recommended to wrap the logic
for your solution into an `async` function. Use `main` as the name of the
function to follow the convention for programs entry point.
- You must call `main` at the end of the file.
- Execute the exercises using `node ./src/01_greeting.js` where `01_greeting.js`
is the name of your exercise file.
