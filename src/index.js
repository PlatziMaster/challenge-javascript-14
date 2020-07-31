const size 
const asterisk = '*'
const gap = ' '
function diamond (size){
  if(size%2==0 || size<=1){
    console.log(null)
  }
  else{
    var spaces = ((size+1)/2)-1
    for(let i=0; i<=size; i++){
      if(i%2==1){
      console.log(gap.repeat(spaces)+asterisk.repeat(i))
      spaces -= 1
      }
    }  
    var spaces2 = 1
    for(let j=size-2; j>=0; j--){
      if(j%2==1){
      console.log(gap.repeat(spaces2)+asterisk.repeat(j))
      spaces2 +=1
      }
    }  
  }
}

diamond(size)
module.exports = { diamond };
