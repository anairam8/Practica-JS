//7. Contar rango de números

// Escribir una función llamada countRange que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

function countRange(firstNumber, lastNumber) {
  let range = 0;
  for (i = fisrtNumber; i < lastNumber; i++) {
    if (i > fisrtNumber) {
      range++;
    }
  }
  return range;
}

// código de prueba
console.log(countRange(1, 9)); // 7
console.log(countRange(1332, 8743)); // 7410
console.log(countRange(5, 6)); // 0
