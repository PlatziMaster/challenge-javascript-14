
function diamond(size) {
  if(size % 2 && size > 0) {
    let arraySpaces = [];
    for (let index = 0; index < Math.floor(size / 2) + 1; index++) {
      arraySpaces.push(Math.floor(size / 2) - index);
    }
    let arraySpacesReverse = [...arraySpaces.reverse() ] ;
    arraySpacesReverse.reverse();
    let arrayDiamonds = arraySpacesReverse.concat(arraySpaces);
    for (let index = 0; index < arrayDiamonds.length ; index++) {
      if(arrayDiamonds[index] == arrayDiamonds[index + 1]) {
        arrayDiamonds.splice(index, 1);
      }
    }
    let lineDiamond = [];
    for (let index = 0; index < arrayDiamonds.length; index++) {
      if(arrayDiamonds[index] == 0) {
        for (let i = 0; i < size; i++) {
          lineDiamond.push('*');
        }
        lineDiamond.push('\n');
        continue;
      }
      let templateSize = size;
      for (let i = 0; i < arrayDiamonds[index]; i++) {
        lineDiamond.push(' ');
        templateSize-=2;
      }
      for (let i = 0; i < templateSize; i++) {
        lineDiamond.push('*');
      }
      lineDiamond.push('\n');
    }
    return lineDiamond.join('');
  }
  return null;
}

module.exports = { diamond };
