// 17. capitalizeEveryWord cada palabra
// Escribir una función llamada capitalizeEveryWord que reciba un string y capitalice la primera letra de cada palabra

function capitalizeEveryWord(words) {
  let words = words.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}
console.log(capitalizeEveryWord("hola mundo")); // "Hola Mundo"
console.log(capitalizeEveryWord("make it real")); // "Make It Real"
console.log(capitalizeEveryWord("")); // ""
