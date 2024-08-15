// 25. Encontrar palabras que terminan en "s"
// Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

function terminanConS(arreglo){
    let termina_en_s= [];
    for(let i=0; i < arreglo.length;i++){
        let palabra= arreglo[i];
        if(palabra.charAt(palabra.length - 1).toLowerCase() === 's'){
            termina_en_s.push(palabra);
        }
    }
    return termina_en_s;
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []

// palabra.charAt(palabra.length - 1):

// palabra es la palabra actual del arreglo que estamos evaluando.
// palabra.length - 1 nos da el índice del último carácter de la palabra.
// charAt() es un método de los strings en JavaScript que devuelve el carácter en la posición especificada.
// Por lo tanto, palabra.charAt(palabra.length - 1) obtiene el último carácter de la palabra.