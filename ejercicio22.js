/*Encontrar findPositionsOfEvenNumbers de números pares

Escribir una función llamada findPositionsOfEvenNumbers que reciba un arreglo de números
y retorne un nuevo arreglo con las findPositionsOfEvenNumbers donde se encuentran números pares.*/
function findPositionsOfEvenNumbers(numbersList) {
  let evenNumbersList = [];

  for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 === 0) {
      evenNumberList.push(i);
    }
  }

  return evenNumberList;
}

// Código de prueba
console.log(findPositionsOfEvenNumbers([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(findPositionsOfEvenNumbers([])); // []

/*Duplicar elementos de un arreglo.

Escribir una función llamada duplicar que reciba un arreglo de números
y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicar(array){
    if (array.length === 0) {
        return ("El array está vacío");
    }
    let nuevoArray = [];
    for(i = 0; i < array.length; i++){
        nuevoArray = array[i] * 2;
    }
    return nuevoArray;
}

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []*/
