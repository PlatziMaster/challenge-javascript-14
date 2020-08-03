function diamond(size) {
  let diamond = '';
    let long = ((size + 1) / 2) - 1;
    if (size % 2 === 0 || size <= 0 ) {
      return null;
    } else {
        for (let i = 1; i <= size; i++) {
          if (i % 2 !== 0) {
            diamond += ' '.repeat(long) + '*'.repeat(i) + '\n';
            long--;
          }
        }
        long = 1;
        for (let j = size - 2; j >= 1; j--) {
          if (j % 2 !== 0) {
            diamond += ' '.repeat(long) + '*'.repeat(j) + '\n';
            long += 1;
          }
        }      
    }
    return diamond;
}

module.exports = { diamond };
