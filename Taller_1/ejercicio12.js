/*Multiplicar arreglo.

Escribir una función llamada multiplicarArreglo 
que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

function multiplyList(list) {
  if (list.length === 0) {
    return 1; // Para manejar el caso de un arreglo vacío
  }
  let resultMultiply = 1;
  for (let i = 0; i < list.length; i++) {
    resultMultiply *= list[i];
  }
  return resultMultiply;
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1
