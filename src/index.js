function diamond(size) {
  if (size < 1 || size % 2 !== 1) return null;
  const diamondArray = new Array(size);

  for (let i = 0; i < diamondArray.length; i++) {
    const dimRow = 2 * i + 1;
    diamondArray[i] = `${' '.repeat(Math.abs(size - dimRow) / 2)}${'*'.repeat(size - Math.abs(size - dimRow))}`;
  }

  const diamondString = `${diamondArray.join('\n')}\n`;
  
  return diamondString;
}

module.exports = { diamond };
