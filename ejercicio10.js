/*Numero de caracteres

Escribir una función llamada countCharacters que reciba un string y un caracter 
(un string de un caracter). 
La función debe retornar el número de veces que aparece el caracter en el string.
*/

function countCharacters(word, character) {
  let totalCharacters = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      totalCaracter++;
    }
  }
  return totalCharacters;
}

// código de prueba
console.log(countCharacters("Hola Mundo", "o")); // 2
console.log(countCharacters("MMMMM", "m")); // 0
console.log(countCharacters("eeee", "e")); // 4
