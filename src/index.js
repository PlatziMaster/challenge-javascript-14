function diamond(size) {
  if (size < 3 || size %2 === 0) {
    return null
  } else {
    const diamondArray = new Array (size);

    for (let i = 0; i < diamondArray.length; i++ ){
     const level = 2 * i + 1;
    diamondArray[i] = `${' '.repeat(Math.abs(size - level) / 2)}${'*'.repeat(size - Math.abs(size - level))}${diamondArray.join('\n')}\n`;
    }
    console.log(diamondArray)
    return diamondArray;
  }
}

module.exports = { diamond };
