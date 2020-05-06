function diamond(size) {
  let res = null
  let resInvert = ''
  let cRes = ''
  if((size%2) > 0 && size > 0) {
    let interaction = (size - 1) / 2
    res = ''
    while(interaction >= 0) {
      resInvert = cRes + resInvert
      cRes = ' '.repeat(interaction) + '*'.repeat((size - (interaction * 2))) + '\n'
      res += cRes
      interaction--
    }

    res = res + resInvert
  }
  return res
}

module.exports = { diamond };
