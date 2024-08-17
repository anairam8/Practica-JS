/* Crea un programa que convierta una temperatura de grados Celsius a grados
 * Fahrenheit o viceversa, según la elección del usuario.

- Solicita al usuario
 * que elija el tipo de conversión: de Celsius a Fahrenheit o de Fahrenheit a
 * Celsius.
- Solicita al usuario que ingrese la temperatura que desea
 * convertir.
- Utiliza funciones para realizar las conversiones necesarias.
-
 * Muestra el resultado de la conversión al usuario.
- Ejemplo de entrada: ¿Qué
 * tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para
 * Fahrenheit a Celsius): 1, Inserta la temperatura en grados Celsius: 25
-
 * Salida esperada: 25 grados Celsius equivalen a 77 grados Fahrenheit.
 */
// Función para convertir de Celsius a Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32);
}

// Función para convertir de Fahrenheit a Celsius
function convertFahrenheitToCelsius(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9);
}

// Solicita al usuario que elija el tipo de conversión
let optionConversion = parseInt(prompt(
    "¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para " +
    "Fahrenheit a Celsius):"
));

// Solicita la temperatura que se desea convertir
let temperature = parseFloat(
    prompt("Inserta la temperatura que deseas convertir:")
);

if (optionConversion === 1) {
    let convertedTemp = convertCelsiusToFahrenheit(temperature);
    alert(
        `${temperature} grados Celsius equivalen a ${convertedTemp.toFixed(2)} grados Fahrenheit.`
    );
} else if (optionConversion === 2) {
    let convertedTemp = convertFahrenheitToCelsius(temperature);
    alert(
        `${temperature} grados Fahrenheit equivalen a ${convertedTemp.toFixed(2)} grados Celsius.`
    );
} else {
    alert("Opción no válida. Por favor, selecciona 1 o 2.");
}
