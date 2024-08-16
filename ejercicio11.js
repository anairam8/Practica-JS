// 11. Sumar arreglo
// Escribir una función llamada addList que reciba un arreglo de números y retorne la suma de todos los elementos.

function addList(list) {
  let resultAdd = 0;
  for (i = 0; i < list.length; i++) {
    resultAdd += list[i];
  }
  return suma;
}

console.log(addList([3, 1, 2])); // 6
console.log(addList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(addList([])); // 0
