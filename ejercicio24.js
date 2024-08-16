/*Encontrar palabras que empiecen por "a"

Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un 
nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).*/

function findWordsThatStartWithA(wordsList) {
  let wordsListWithA = [];
  for (let i = 0; i < wordsList.length; i++) {
    if (wordsList[i].charAt(0) === "a" || wordsList[i].charAt(0) === "A") {
      wordsListWithA.push(wordsList[i]);
    }
  }
  return wordsListWithA;
}

// código de prueba
console.log(findWordsThatStartWithA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(findWordsThatStartWithA(["beta", "delta", "gama"])); // []
console.log(findWordsThatStartWithA([])); // []
