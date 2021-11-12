const readline = require('readline');
const process = require('process');

module.exports = {
  /**
   * 
   * @param {string} message 
   * @returns
   *
   * Creates a `readline` intertface and wraps a call to `question` in a
   * `Promise`.
   * 
   * Reference: https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
   */
  input(message) {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve, reject) => {
      try {
        readlineInterface.question(message, (value) => {
          readlineInterface.close();
          resolve(value);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
