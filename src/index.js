function diamond(size) {
  // Size must be a number
  if (typeof size === 'number') {
    // Size must be a positive number
    if (size > 0) {
      // Size must be a odd number
      if (size % 2 !== 0) {
        // Diamond initial value
        let diamond = '';
        // Get middle row position --(2)--
        const ref = Math.ceil(size / 2);
        // The number of diamond rows must be equal to size --(1)-- 
        for (let index = 1; index <= size; index++) {
          // Add row to diamond
          diamond = 
            // Previous diamond value
            diamond + 
            // The number of spaces must be the diference between
            // the middle row position and the current row position --(3)--
            ' '.repeat(Math.abs(ref - index)) +
            // The number of asterisks must be the size minus 
            // two times the number of spaces --(4)--
            '*'.repeat(size - (Math.abs(ref - index)) * 2) +
            // Add line break
            '\n';
        }
        // Return diamond value
        return diamond;
      }
    }
  }
  // Return null when any condition wasn't passed
  return null;
}

module.exports = { diamond };
