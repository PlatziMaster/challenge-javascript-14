function diamond(size) {
   let str=''
  if (size <= 1 || size % 2 === 0) return null

  if(size>0 && !size%2==0) {
    var count=1;
    var star="*"
    var space=" "
    let msj="";
    while(count<size){
      msj+=space.repeat((size-count)/2)+star.repeat(count)+"\n"
      count+=2;
    }
    count=size;
    var i=0;
    while(count>=1){
      msj+=space.repeat(i)+star.repeat(count)+"\n"
      i++;
      count-=2;
    }
    str=msj;
  }
  return str;
}
