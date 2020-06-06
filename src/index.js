function diamond(size) {
  if(size % 2 === 0 || size < 0) return null;

  let result = '';
  for (let i = 1; i <= size/2 + 1; i++) {
    for(let j = (size+1)/2 - i; j > 0; j--) result += ' ';

    for (let k = 0; k < 2*i-1; k++) result += '*';

    result += '\n';
  }

  for (let i = size/2 ; i > 1; i--) {
    for(let j = 0; j < (size+1)/2 - i; j++) result += ' ';

    for (let k = 2*i-1; k > 1; k--) result += '*';

    result += '\n';
  }
  return result;
}

module.exports = { diamond };
