function calculateDistance(startFrom, target){
  let distance = 0;
  for(let i = startFrom+1; i <= target; i++){
    if(i%2 != 0){
      distance++
    }
  }
  return distance;
}

function diamond(size) {
  if(size%2 === 0 || size < 0){
    return null;
  }
  
  let diamond = '';
  let nxtLine = ''

  // Top Part
  for(let i = 1; i < size; i++){
    if(i%2 != 0){
      let distance = calculateDistance(i, size);
      nxtLine += ' '.repeat(distance)
      nxtLine += '*'.repeat(i);
      nxtLine += '\n'
    }
  }
  diamond += nxtLine

  // Bottom part
  nxtLine = '';
  for(let i = size; i > 0; i--){
    if(i%2 != 0){
      let distance = calculateDistance(i, size);
      nxtLine += ' '.repeat(distance)
      nxtLine += '*'.repeat(i)
      nxtLine += '\n'
    }
  }
  diamond += nxtLine
  return diamond;
}
module.exports = { diamond };
