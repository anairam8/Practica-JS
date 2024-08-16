// 19. Encontrar el número mínimo
// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function findMinimumNumber(numbers) {
  let minimumNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimumNumber) {
      minimumNumber = numbers[i];
    }
  }
  return minimumNumber;
}

console.log(findMinimumNumber([3, 9, 6])); // 3
console.log(findMinimumNumber([67, 35, 54, 26])); // 26
console.log(findMinimumNumber([5, 9, 2, 4, 5, 7])); // 2
