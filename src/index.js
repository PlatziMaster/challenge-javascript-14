function diamond(size) {
  if (size < 0 || size % 2 === 0) return null;
  // creamos una variable vacia
  let diamond = "";
  for (let i = 0; i < size; i++) {
    //obtenemos numeros impares
    const item = 2 * i + 1;
    //''.repeat(Math.abs((size - item) / 2)) resuelve la cantidad de espcios en blanco agregara al inicio
    //'*'.repeat(size - Math.abs(size - item)) resuelve cuantas veces se repetira el *
    diamond += ' '.repeat(Math.abs((size - item) / 2)) + '*'.repeat(size - Math.abs(size - item)) + '\n';
  }
  return diamond;
}
module.exports = { diamond };