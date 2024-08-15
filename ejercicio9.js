// 9. Número de aes (letra "a")
// Escribir una función llamada amountOfA que reciba un string y retorne el número de veces que aparece la letra "a"

function amountOfA(word) {
  let counter = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "A") {
      counter++;
    }
  }
  return counter;
}

console.log(amountOfA("abracadabra")); // 5
console.log(amountOfA("etinol")); // 0
console.log(amountOfA("")); // 0
