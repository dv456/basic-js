const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let a = '';
  let b = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      b++;
    } else {
      if (b === 1) {
        a += str[i];
      } else {
        a += b + str[i];
        b = 1;
      }
    }
  }

  return a;
}

module.exports = {
  encodeLine
};
