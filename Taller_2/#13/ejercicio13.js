// Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario
let primerNumero = parseInt(prompt("Digite un numero del 1 al 10"));
let segundoNumero = parseInt(prompt("Digite un numero del 1 al 10"));
let tercerNumero = parseInt(prompt("Digite un numero del 1 al 10"));

let resultado = (primerNumero + segundoNumero + tercerNumero) / 3
let promedioMayorA5 = Math.round(resultado) > 5  ? "Promedio mayor a 5" : "Promedio menor a 5";

document.write(promedioMayorA5);

