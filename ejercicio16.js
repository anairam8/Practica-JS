/*capitalizaWord palabras

Escribir una función llamada capitalizaWord que reciba un string y capitalice la primera letra:*/

function capitalizeWord(word) {
  if (!word) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
} //charAt, permite obtener un caracter en determinada posicion en este caso el primer caracter.
//toUpperCase, permite convertir ese caracter en especifico a mayuscula.
/*slice, permite unir el caracter que se selecciono con el metodo charAt y 
    esta en mayuscula con el metodo toUpperCase a el resto de la cadena.*/

// código de prueba
console.log(capitalizaWord("pedro")); // "Pedro"
console.log(capitalizaWord("juan")); // "Pedro"
console.log(capitalizaWord("hola mundo")); // "Hola mundo"
console.log(capitalizaWord("")); // ""
