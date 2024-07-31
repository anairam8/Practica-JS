/*Imprimir un arreglo

Escribir una función llamada imprimirArreglo que reciba 
un arreglo e imprima cada elemento en una línea a parte:
*/

function imprimirArreglo(array){
    for(let i = 0; i < array.length; i++){
            console.log(array[i])
    }
}

// código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);