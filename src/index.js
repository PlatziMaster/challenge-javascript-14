function diamond(size, value = '*', spacesValue = ' ') {
  if (size.toFixed(0) % 2 === 0 || size.toFixed(0) < 0) return null
  let strgDiamonds = ''
  const top = Math.floor(size / 2)
  let spaces = Math.floor(size / 2)
  let astericsBelow = size - Math.floor(size / 2) - 1
  for (let i = 0; i < size; i++) {
    if (i <= top - 1) {
      strgDiamonds += `${`${spacesValue}`.repeat(spaces)}${`${value}`.repeat( i !== 0 ? (i * 2 + 1) : 1)}\n`
      spaces--
    } else {
      if (spaces === 0) {
        strgDiamonds += `${`${value}`.repeat(size)}\n`
        spaces++
      } else {
        strgDiamonds += `${`${spacesValue}`.repeat(spaces)}${`${value}`.repeat( i < size - 1 ? (astericsBelow * 2 - 1) : 1)}\n`
        astericsBelow--
        spaces++
      }
    }
  }

  console.log(strgDiamonds, `${size} height`)
  return strgDiamonds
}

module.exports = { diamond };
