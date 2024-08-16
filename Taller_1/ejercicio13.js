// 13. Remover ceros
// Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

function removeZeros(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      result.push(arreglo[i]);
    }
  }
  return result;
}

console.log(removeZeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerZeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerZeros([0, 0, 0])); // []
