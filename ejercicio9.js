// 9. Número de aes (letra "a")
// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a"

function numeroDeAes(cadena){
    let contador = 0;
    for(i=0; i < cadena.length; i++){
        if(cadena[i] === "a" || cadena[i] === "A"){
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0