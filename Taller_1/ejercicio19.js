// 19. Encontrar el número mínimo
// Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

// Nota: Intentarlo hacer sin el método Math.min de JavaScript.

function min(numeros){
    let minimo = numeros[0];
    for(let i =0; i <numeros.length;i++){
        if(numeros[i] < minimo){
            minimo = numeros[i];
        }
    }
    return minimo;
}

console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2