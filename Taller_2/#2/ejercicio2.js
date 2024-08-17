/*Crea un programa que convierta la edad de un perro a años humanos.

- Solicita al usuario que indique la edad de su perro en años.
- Calcula la edad del perro en años humanos multiplicando la edad del perro por 7.
- Muestra la edad del perro en años humanos al usuario.
- Ejemplo de entrada: Edad del perro: 5 años.
- Salida esperada: La edad del perro en años humanos es 35 años.*/

let dogAge = prompt("Indica la edad de tu perro 🐶 en años:");

if (dogAge !== null && dogAge.trim() !== "") {
  dogAge = parseFloat(dogAge);

  if (!isNaN(dogAge) && dogAge > 0) {
    const humanAge = dogAge * 7;
    alert(`La edad del perro 🐶 en años humanos es ${humanAge} años.`);
  } else {
    alert("Por favor, ingresa una edad válida (número positivo mayor a 0).");
  }
} else {
  alert("No se ingresó ninguna edad. Por favor, ingresa la edad de tu perro.");
}
