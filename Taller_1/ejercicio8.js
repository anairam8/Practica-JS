/*Sumar un rango de numeros

Escribir una función llamada addRange que reciba dos argumentos: número inicial y número final.
La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/

function addRange(firstNumber, lastNumber) {
  let resultAdd = 0;
  for (let i = firstNumber; i <= lastNumber; i++) {
    resultAdd += i;
  }
  return resultAdd;
}

// código de prueba
console.log(addRange(0, 10)); // 55
console.log(addRange(12, 14)); // 39
console.log(addRange(5, 5)); // 5
