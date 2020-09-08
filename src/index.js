function diamond(size) {
  // your code
  if (size % 2 === 0 || size < 3) {
    return null;
  }
  let text = '';
  for (let i = 0; i < size; i++) {
    const level = 2 * i + 1;
    text += `${' '.repeat(Math.abs(size - level) / 2)}${'*'.repeat(size - Math.abs(size - level))}\n`;
  }
  //console.log(diamond);
  return text;
}

module.exports = { diamond };