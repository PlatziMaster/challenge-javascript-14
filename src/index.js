(function diamond(size) {
  if ( size < 1 || !(size % 2)) return null;
  
  const diamond = [];

  for (let i = 0; i < size; i++) {
    const row = (i*2) + 1;
    const spaces = ' '.repeat(Math.abs(row - size) / 2);
    const asterisks = '*'.repeat(size - Math.abs(row - size));
    diamond.push(`${spaces}${asterisks}`);
  }

  const diamondString = `${diamond.join('\n')}\n`;
  console.log(diamond)
  return diamondString;
})(31)

// module.exports = { diamond };