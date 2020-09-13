const diamond = (size) => {
  const str = "*";
  const sp = " ";
  let acum = 1;
  const counter = size;
  let c = Math.floor(size / 2);
  if (size > 0 && size % 2 == 1) {
    for (i = 0; i < Math.ceil(counter / 2); i++) {
      if (acum < size) {
        console.log(`${sp.repeat(c)}${str.repeat(acum)} \n`);
        acum = acum + 2;
      } else if (acum == size) {
        console.log(`${str.repeat(size)} \n`);
      }
      c -= 1;
    }
    acum -= 2;
    let b = 1;
    while (acum > 0) {
      console.log(`${sp.repeat(b)}${str.repeat(acum)} \n`);
      acum -= 2;
      b += 1;
    }
  }
  return;
};

module.exports = { diamond };
