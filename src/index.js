function diamond(size) {
  // your code
  //Solucion
  if (size <= 1 || size % 2 === 0) return null;
  let printLn = (size, dots) => {
    let spaces = (size - dots) / 2;
    let strSpaces = " ".repeat(spaces);
    let strDots = "*".repeat(dots);
    return `${strSpaces}${strDots}\n`;
  };  
  let str = "";
  let n = 0;
  // Parte de arriba del diamante
  while (n < size) {
    if (n % 2 != 0) {
      str += printLn(size, n);
    }
    ++n;
  }
  //parte de abajo del diamante
  n = size;
  while (n > 0) {
    if (n % 2 != 0) {
      str += printLn(size, n);
    }
    --n;
  }
  return str;
}

module.exports = { diamond };
