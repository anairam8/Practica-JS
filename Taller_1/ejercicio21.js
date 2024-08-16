// 21. Encontrar números findEvenNumbers en un arreglo
// Escribir una función llamada findEvenNumbers que reciba un arreglo de números y retorne un nuevo arreglo con los números findEvenNumbers únicamente.

function findEvenNumbers(numbersList) {
  let evenNumbers = [];
  for (i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 == 0) {
      evenNumbers.push(numbersList[i]);
    }
  }
  return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(findEvenNumbers([])); // []
