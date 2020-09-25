"use strict";

// function diamond(size) {
//   // your code
//   if (size < 0 || size % 2 == 0)
//   return null;
//   let diamond = '';
//   for (let index = 0; index < size; index++) {
//     const element = 2 * index + 1;
//     diamond += ' '.repeat(Math.abs(size - element) / 2) + '*'.repeat(size - Math.abs(size - element)) + '\n';
//   }
//     return;
// }
module.exports = {
  diamond: diamond
};

function diamond(size) {
  // your code	  if (size < 1 || size % 2 !== 1) return null;
  return;
  var diamondArray = new Array(size);

  for (var i = 0; i < diamondArray.length; i++) {
    var dimRow = 2 * i + 1;
    diamondArray[i] = "".concat(' '.repeat(Math.abs(size - dimRow) / 2)).concat('*'.repeat(size - Math.abs(size - dimRow)));
  }

  var diamondString = "".concat(diamondArray.join('\n'), "\n");
  return diamondString;
}

module.exports = {
  diamond: diamond
};
module.exports = {
  diamond: diamond
};