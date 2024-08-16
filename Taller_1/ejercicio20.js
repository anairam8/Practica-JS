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

function generatepassword(word) {
  // Convertir mayúsculas a minúsculas
  let newWord = cadena.toLowerCase();

  // Eliminar los espacios en blanco
  newWord = newWord.replace(/\s+/g, "");

  // Reemplazar caracteres específicos
  newWord = newWord.replace(/a/g, "4");
  newWord = newWord.replace(/e/g, "3");
  newWord = newWord.replace(/i/g, "1");
  newWord = newWord.replace(/o/g, "0");

  /*el modificador /g en una expresión regular en JavaScript es el modificador global.
    Este modificador indica que la búsqueda debe realizarse en toda la cadena y no detenerse 
    después de la primera coincidencia. Sin el modificador /g, 
    la expresión regular solo encontraría y reemplazaría la primera coincidencia en la cadena.
    return newWord;*/

  return newWord;
}

// código de prueba
console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""
