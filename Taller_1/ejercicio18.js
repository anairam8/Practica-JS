/*Encontrar el número máximo

Escribir una función llamada findMaximumNumber que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.findMaximumNumber de JavaScript*/

function findfindMaximumNumberimumNumber(list) {
  let findMaximumNumberimumNumber = 0;
  for (i = 0; i < array.length; i++) {
    if (findMaximumNumberimunNumber < list[i]) {
      findMaximumNumberimunNumber = list[i];
    }
  }
  return findMaximumNumberimunNumber;
}

// código de prueba
console.log(findMaximumNumber([3, 9, 6])); // 9
console.log(findMaximumNumber([67, 35, 54, 26])); // 67
console.log(findMaximumNumber([5, 9, 2, 4, 5, 7])); // 9
