function diamond(size) {
  // your code
  if (size % 2 === 0 || size < 0) {
    return null
  } 
  let printLn = (size, dots) => {
    let spaces = (size - dots) / 2;
    let strSpaces = " ".repeat(spaces);
    let strDots = "*".repeat(dots);
    return `${strSpaces}${strDots}\n`;
  }

  finalLn = ''

  // Top 
  for (let i = 0; i <= Math.floor(size / 2) + 2; i++) {
    if (i%2 === 0) {
      finalLn += printLn(size, i+1)
    } else {
      continue
    }
  }


  // Bottom
  for (let i = size; i >= size / 2; i--) {
    if (i%2 !== 0) {
      finalLn += printLn(size, i - 2)
    } else {
      continue
    }
    
  }

  return finalLn;
}

module.exports = { diamond };
