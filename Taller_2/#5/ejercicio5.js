// cspell:disable
// Función para generar los primeros N términos de la secuencia de Fibonacci
function generarFibonacci(n) {
    let secuencia = []; // Array para almacenar la secuencia
    let a = 0, b = 1, temp;

    // Generar los primeros N términos de la secuencia
    for (let i = 0; i < n; i++) {
        secuencia.push(a); // Agregar el término actual a la secuencia
        temp = a; 
        a = b; 
        b = temp + b; // Calcular el siguiente término
    }

    return secuencia;
}

// Solicitar al usuario el número de términos que desea generar
let numeroDeTerminos = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci:"));

// Generar la secuencia de Fibonacci
let secuenciaFibonacci = generarFibonacci(numeroDeTerminos);

// Mostrar los términos generados al usuario
document.write(`Los primeros ${numeroDeTerminos} términos de la secuencia Fibonacci son: ${secuenciaFibonacci.join(', ')}`);


