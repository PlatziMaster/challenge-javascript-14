function diamond(size) {
  if (size < 0 || size % 2 == 0)
    return null;
  let diamond = '';

  for (let index = 0; index < size; index++) {
    const element = 2 * index + 1;
    diamond += ' '.repeat(Math.abs(size - element) / 2) + '*'.repeat(size - Math.abs(size - element)) + '\n';
  }

  return diamond;
}

module.exports = { diamond };
