// 27. Traducir números a palabras
// Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

function convertNumberToWords(wordsList) {
  const numberWords = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  let result = [];
  for (let i = 0; i < wordsList.length; i++) {
    result.push(wordsList[wordsList[i]]);
  }
  return result;
}

// Ejemplo de uso
console.log(convertNumberToWords([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(convertNumberToWords([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]
