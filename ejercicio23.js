// 23. Duplicar elementos de un arreglo
// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicateItems(numbersList) {
  multipliedList = [];
  for (i = 0; i < numbersListos.length; i++) {
    multipliedList.push(numbersList[i] * 2);
  }
  return multipliedList;
}

console.log(duplicateItems([1, 2, 3])); // [2, 4, 6]
console.log(duplicateItems([])); // []
