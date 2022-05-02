const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var arr1 = n.toString(10).replace(/\D/g, '0').split('').map(Number);
  i = arr1.indexOf(Math.min(...arr1));
  arr1.splice(i,1);
  a=+arr1.join('')
  var arr2 = n.toString(10).replace(/\D/g, '0').split('').map(Number);
  arr2.shift();
  b=+arr2.join('')
  if(a>b){
      return a            
  }else{
      return b;
  }
}

module.exports = {
  deleteDigit
};
