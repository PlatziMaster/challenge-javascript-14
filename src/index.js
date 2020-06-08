function recursiveStr(stars, size){
  let diffBlank = (size - stars)/2;

  let str = "";

  for(let i=0; i < diffBlank; i++){
    str = str.concat(" ");
  }

  for(let i=0; i < stars; i++){
    str = str.concat("*");
  }

  str = str.concat("\n");

  return str;

}

function diamond(size) {

  let diamondst = "";

  if ( size % 2 == 0 ){
    return null;
  }else if( size < 1 ){
    return null
  }else{
    for( let i = 1; i <= size; i++){
      if( i%2 != 0){
        let str = recursiveStr(i, size);
        diamondst = diamondst + str;
      }
    }

    for( let i = size-2; i >= 1; i--){
      if( i%2 != 0){
        let str = recursiveStr(i, size);
        diamondst = diamondst + str;
      }
    }
    
  }

  console.log(diamondst);

  return diamondst;
}

module.exports = { diamond };
