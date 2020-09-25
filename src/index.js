function diamond() {
  // your code	
  let arrayDiamond = []  
  let size = prompt('Hola, de que tamaño quieres tu diamante?','')
  parseInt(size)
  if (size <= 1 || size % 2 === 0) return alert("Por favor introduce un número impar")
    let diamond = "";
     
  for (let i = 0; i < size; i++) {
    let maxSizeDiamond = 2 * i + 1
    if (maxSizeDiamond <= size) {
      const startPoint = (size - maxSizeDiamond) / 2;
      for (let j = 0; j < size; j++) {
        if (j >= startPoint && j < (maxSizeDiamond + startPoint)) {
          diamond += '*'
          
        } else if (j <= startPoint) {
          diamond += ' '
        }
        
      }
    } else {
      const startPoint = (maxSizeDiamond - size) / 2;
      const limit = (size * 2) - maxSizeDiamond
      for (let j = 0; j < size; j++) {
        if (j >= startPoint && j < (limit + startPoint)) {
          diamond += '*'
        } else if (j <= startPoint) {
          diamond += ' '
        }
        
      }
    }
    diamond += '\n'
        
  }
  console.log(diamond)
  return diamond
  
}	

diamond();

