const size = prompt('Hola, de que tamaño quieres tu diamante?','')
parseInt(size)
const asterisk = '*'
const bk = ' '
function diamond(size) {
  if (size <= 1 || size % 2 === 0) {
    console.log(null)
  }
 else {
   var spaces = ((size+1)/2-1)
   for (let i=0; i <=size; i++){
     if (i%2==1){
       console.log(bk.repeat(spaces)+asterisk.repeat(i))
       spaces -= 1
     }
   }
 }
 var space2 = 1 
 for(let j=size-2; j>=0; j--){
   if (j%2==1){
     console.log(bk.repeat(space2)+asterisk.repeat(j))
     space2
   }
 }
}
diamond(size)
module.exports = { diamond };
