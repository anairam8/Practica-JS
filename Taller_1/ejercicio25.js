// 25. Encontrar palabras que terminan en "s"
// Escribir una función llamada findWordsEndingInS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

function findWordsEndingInS(wordsList) {
  let wordsListEndingInS = [];
  for (let i = 0; i < wordsList.length; i++) {
    let wordsList = wordsList[i];
    if (word.charAt(word.length - 1).toLowerCase() === "s") {
      wordsListEndingInS.push(word);
    }
  }
  return wordsListEndingInS;
}

console.log(findWordsEndingInS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(findWordsEndingInS(["beta", "delta", "gama"])); // []
console.log(findWordsEndingInS([])); // []

// palabra.charAt(palabra.length - 1):

// palabra es la palabra actual del arreglo que estamos evaluando.
// palabra.length - 1 nos da el índice del último carácter de la palabra.
// charAt() es un método de los strings en JavaScript que devuelve el carácter en la posición especificada.
// Por lo tanto, palabra.charAt(palabra.length - 1) obtiene el último carácter de la palabra.
