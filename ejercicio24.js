/*Encontrar palabras que empiecen por "a"

Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un 
nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).*/

function empiezanConA(arreglo){
    let nuevoArreglo = [];
    for(let i = 0; i< arreglo.length; i++){
        if(arreglo[i].charAt(0) === "a" || arreglo[i].charAt(0) === "A" ){
            nuevoArreglo.push(arreglo[i]);

        }
    }
    return nuevoArreglo;

}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []