/*Capitalizar palabras

Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:*/

function capitalizar(cadena) {
    if (!cadena) {
        return "";
    }
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}   //charAt, permite obtenr un caracter en determinada posicion en este caso el primer caracter.
    //toUpperCase, permite convertir ese caracter en especifico a mayuscula.
    /*slice, permite unir el caracter que se selecciono con el metodo charAt y 
    esta en mayuscula con el metodo toUpperCase a el resto de la cadena.*/



// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

