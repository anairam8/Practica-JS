// 5. Número de countLikes
// Escribe una función llamada countLikes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

function countcountLikes(amount) {
  if (amount < 1000) {
    return amount.toString();
  } else if (amount < 1000000) {
    return (amount / 1000).toFixed(0) + "K";
  } else {
    return (amount / 1000000).toFixed(0) + "M";
  }
}

console.log(countLikes(983)); // "983"
console.log(countLikes(1900)); // "1K"
console.log(countLikes(54000)); // "54K"
console.log(countLikes(120800)); // "120K"
console.log(countLikes(25222444)); // "25M"
