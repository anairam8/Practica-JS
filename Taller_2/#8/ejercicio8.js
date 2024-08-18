/*Pedir dos números y decir si non múltiplos o no.*/

function areMultiples(a, b) {
    return a % b === 0;
}

let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

if (areMultiples(num1, num2)) {
    alert(`${num1} es múltiplo de ${num2}`);
} else {
    alert(`${num1} no es múltiplo de ${num2}`);
}
