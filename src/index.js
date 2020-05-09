function diamond(size) {
  let result = null
  let resultInvert = ''
  let backupResult = ''
  if((size%2) > 0 && size > 0) {
    result = ''
    let interaction = (size - 1) / 2
    while(interaction >= 0) {
      resultInvert = backupResult + resultInvert
      backupResult = `${' '.repeat(interaction)}${'*'.repeat((size - (interaction * 2)))}\n`
      result += backupResult
      interaction--
    }
    result = result + resultInvert
  }
  return result
}

module.exports = { diamond };
