// Load the full build.
var _ = require('lodash');

////////////////////////////////////

let chunk = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
console.log(chunk)

////////////////////////////////////

let reverse = _.reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(reverse)

////////////////////////////////////

let without = _.without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 2, 1)
console.log(without)

////////////////////////////////////

let shuffle = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(shuffle)

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(12, 13));
  console.log(gcd_two_numbers(9, 3));