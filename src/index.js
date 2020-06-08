function recursiveStr(stars, size){
  //console.log(stars+"-"+size);
  //console.log("funcion");
  let diffBlank = (size - stars)/2;

  let str = "";

  for(let i=0; i < diffBlank; i++){
    str = str.concat(" ");
  }

  for(let i=0; i < stars; i++){
    str = str.concat("*");
  }

  /* for(let i=0; i < diffBlank; i++){
    str = str.concat(" ");
  } */

  str = str.concat("\n");

  //console.log("func"+str);
  return str;

}

function diamond(size) {

  let diamondst = "";

  if ( size % 2 == 0 ){
    return null;
  }else if( size < 1 ){
    return null
  }else{
    //console.log("Entrando");
    for( let i = 1; i <= size; i++){
      //console.log("For");
      if( i%2 != 0){
        //console.log("Condicion");
        let str = recursiveStr(i, size)
        //console.log("concat"+str);
        //diamondst.concat("str","123");
        diamondst = diamondst + str;
        //console.log("inside"+diamondst);
      }
    }

    for( let i = size-2; i >= 1; i--){
      //console.log("For");
      if( i%2 != 0){
        //console.log("Condicion");
        let str = recursiveStr(i, size)
        //console.log("concat"+str);
        //diamondst.concat("str","123");
        diamondst = diamondst + str;
        //console.log("inside"+diamondst);
      }
    }
    
  }

  console.log(diamondst);

  return diamondst;
}

module.exports = { diamond };
