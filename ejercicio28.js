/*Traducir palabras a números.

Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y 
retorne un nuevo arreglo traduciendo cada palabra a su versión numérica
(del 0 al 9). Si la palabra no es un número traducir a -1.*/

function palabrasANumeros(arregloString) {
    const mapa = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    
    let nuevoArreglo = [];
    
    for (let i = 0; i < arregloString.length; i++) {
        if (mapa.hasOwnProperty(arregloString[i])) { //Dentro del bucle, usamos mapa.hasOwnProperty(arregloString[i]) para verificar si la 
                                                    //palabra actual está en el diccionario mapa.
            nuevoArreglo.push(mapa[arregloString[i]]);

            // Si la propiedad existe, se agrega al nuevoArreglo el valor 
            //asociado a esa propiedad en el objeto mapa.
        } else {
            nuevoArreglo.push(-1);
        }
    }
    return nuevoArreglo;
}


// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]