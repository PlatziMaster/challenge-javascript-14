function diamond(size) {
  if (size < 3 || size % 2 === 0) {
    return null
  } else {
    const levelArray = new Array (size);
    
    for (let i = 0; i < levelArray.length; i++ ){
      const level = 2 * i + 1;
      levelArray[i] = `${' '.repeat(Math.abs(size - level) / 2)}${'*'.repeat(size - Math.abs(size - level))}`;
    }
    console.log(levelArray)
    const diamondLevel = `${levelArray.join('\n')}\n`;

    console.log(diamondLevel)
    return diamondLevel;
  }
}



module.exports = { diamond };
