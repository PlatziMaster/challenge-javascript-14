function diamond(size) {
  // your code
  let str=''
  if (size <= 1 || size % 2 === 0) return null

  if(size>0 && !size%2==0) {
    var count=1;
    var d="*"
    var space=" "
    let msj="";
    while(count<size){
      msj+=space.repeat((size-count)/2)+d.repeat(count)+"\n"
      count+=2;
    }
    count=size;
    var i=0;
    while(count>=1){
      msj+=space.repeat(i)+d.repeat(count)+"\n"
      i++;
      count-=2;
    }
    str=msj;
  }
  return str;
}

module.exports = { diamond };
