// 23. Duplicar elementos de un arreglo
// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicar(numeros){
    duplicados=[];
    for(i=0; i < numeros.length;i++){
        duplicados.push(numeros[i] * 2);
    }
    return duplicados;
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []