// 29. Número de asteriscos en un arreglo
// Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos

function countAsterisks(asteriskList) {
  let asteriskCounter = 0;
  for (let i = 0; i < asteriskList.length; i++) {
    if (asteriskList[i] === "*") {
      asteriskCounter++;
    }
  }
  return asteriskCounter;
}

console.log(countAsterisks(["", "*", "", "*"])); // 2
console.log(countAsterisks(["*", "*", "*"])); // 3
console.log(countAsterisks([])); // 0
