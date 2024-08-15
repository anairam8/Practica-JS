/*Generar contraseña

Escribir una función llamada password que reciba un string y retorne un nuevo string realizando 
los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.*/



/*function password(cadenaInicial){
    let cadenaFinal = "";
    cadenaFinal = cadenaInicial.toLowerCase() + cadenaInicial.replace(/\s+/g, '') +
}*/


function password(cadena) {
    // Convertir mayúsculas a minúsculas
    let nuevaCadena = cadena.toLowerCase();

    // Eliminar los espacios en blanco
    nuevaCadena = nuevaCadena.replace(/\s+/g, '');

    // Reemplazar caracteres específicos
    nuevaCadena = nuevaCadena.replace(/a/g, '4');
    nuevaCadena = nuevaCadena.replace(/e/g, '3');
    nuevaCadena = nuevaCadena.replace(/i/g, '1');
    nuevaCadena = nuevaCadena.replace(/o/g, '0');

    /*el modificador /g en una expresión regular en JavaScript es el modificador global.
    Este modificador indica que la búsqueda debe realizarse en toda la cadena y no detenerse 
    después de la primera coincidencia. Sin el modificador /g, 
    la expresión regular solo encontraría y reemplazaría la primera coincidencia en la cadena.
    return nuevaCadena;*/

    return nuevaCadena;
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""