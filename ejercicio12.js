/*Multiplicar arreglo.

Escribir una función llamada multiplicarArreglo 
que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 1;   // Para manejar el caso de un arreglo vacío
    }    
    let resultado = 1;
    for (let i = 0; i < arreglo.length; i++) {
        resultado *= arreglo[i];
    }
    return resultado;
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

