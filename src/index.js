function diamond(size) {
  if (size <= 1 || size % 2 === 0) return null
  let diamond = "";
  // starAmout = 2*i+1 imprime la cantidad correcta de *. i siendo la fila en la que se encuentra
  // cantidad de espacio siempre va a ser igual al startAmount - size (Siemrpe va a se run numero par)
  for (let i = 0; i < size; i++) {
    let cantidad = 2 * i + 1
    if (cantidad <= size) {
      const startPoint = (size - cantidad) / 2;
      for (let j = 0; j < size; j++) {
        if (j >= startPoint && j < (cantidad + startPoint)) {
          diamond += '*'
        } else if (j <= startPoint) {
          diamond += ' '
        }
      }
    } else {
      const startPoint = (cantidad - size) / 2;
      const limite = (size * 2) - cantidad
      for (let j = 0; j < size; j++) {
        if (j >= startPoint && j < (limite + startPoint)) {
          diamond += '*'
        } else if (j <= startPoint) {
          diamond += ' '
        }
      }
    }

    diamond += '\n'

  }
  return diamond
}


module.exports = { diamond }