const diamond = (size) => {
  let diamond = '';
  const space = ' ';
  const asterisk = '*';
  if (size < 1 || size % 2 !== 1) {
    return null;
  } else {
    for (let index = 0; index < size; index++) {
      const odd = 2 * index + 1;
      diamond += `${space.repeat(Math.abs(size - odd) / 2)}${asterisk.repeat(size - Math.abs(size - odd))}\n`;
    }
    return diamond;
  }
};

module.exports = { diamond };
