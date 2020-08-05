function diamond(size) {
  
  if (size <= 0 || size % 2 === 0) return null;

  const repeater = chain => size => chain.repeat(size)
  const rowSpace = repeater(' ')
  const rowStar = repeater('*')

  let shape = ''
  for (let row = 1; row <= size; row++) {
//The Math.abs () function returns the absolute value of a number
    const spaces = Math.abs(size - ((2*row) - 1))
    const stars = size - spaces
    shape += `${rowSpace(spaces / 2)}${rowStar(stars)}\n`
  }

  return shape
}

module.exports = { diamond };
