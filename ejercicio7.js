//7. Contar rango de números

// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

function contarRango(numInicial, numFinal){
    let rango = 0;
    for(i = numInicial; i <numFinal; i++){
        if( i > numInicial){
            rango++; 
        }
    }
    return rango;
}

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0