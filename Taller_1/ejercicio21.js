// 21. Encontrar números pares en un arreglo
// Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

function pares(numeros){
    let pares=[];
    for(i=0;i<numeros.length;i++){
        if(numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }
    }
    return pares;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []