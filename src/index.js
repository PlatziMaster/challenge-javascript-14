function diamond(size) {
  if (size < 3 || size % 2 === 0) {
    return null
  }
  const spaces = (size - 1) / 2
  let array = []
  let numbers = 1
  let asterisks = []
  let space = spaces
  for (let current = 0; current <= size; current++) {
    if (current <= spaces) {
      for (let k = 0; k < space; k++) {
        asterisks = asterisks.concat(' ')
      }
      space--
      for (let j = 0; j < numbers; j++) {
        asterisks = asterisks.concat('*')
      }
      numbers += 2
      asterisks = asterisks.concat('\n')
    } else if (current === spaces + 1) {
      numbers -= 4
      space = 1
    } else {
      for (let k = 0; k < space; k++) {
        asterisks = asterisks.concat(' ')
      }
      space++
      for (let j = 0; j < numbers; j++) {
        asterisks = asterisks.concat('*')
      }
      numbers -= 2
      asterisks = asterisks.concat('\n')
    }
  }
  array = array.concat(asterisks)
  array = array.join('')

  return array
}

module.exports = { diamond }
