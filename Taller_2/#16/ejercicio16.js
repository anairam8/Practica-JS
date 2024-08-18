/*
Ingrese un número y mostrar su potencia n^2, 
repetir este proceso hasta que se ingrese un número negativo
 */



while (true) {
    // Solicitar al usuario que ingrese un número
    let num = parseFloat(prompt("Ingresa un número (ingresa un número negativo para terminar):"));

    // Si el número es negativo, salimos del bucle
    if (num < 0) {
        alert("Número negativo ingresado. Finalizando...");
        break;
    }

    // Calcular la potencia del número (n^2)
    let potencia = Math.pow(num, 2);

    // Mostrar el resultado
    alert(`El cuadrado de ${num} es ${potencia}`);
}