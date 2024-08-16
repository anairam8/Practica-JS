/*Número de asteriscos en una matriz

Escribir una función llamada numAsteriscos que reciba una matriz 
(un arreglo de arreglos) y retorne el número de asteriscos:*/

function countAsterisksInMatrix(matriz) {
  let asterisksCounter = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === "*") {
        asterisksCounter++;
      }
    }
  }
  return asterisksCounter;
}

// código de prueba
console.log(
  countAsterisksInMatrix([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ])
); // 5
