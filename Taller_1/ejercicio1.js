//1. Contraseña válida
//Escribir una función llamada validPassword que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

//Solucion
function validPassword(password) {
  if (password == "2Fj(jjbFsuj" || password == "eoZiugBf&g9") {
    return true;
  } else {
    return false;
  }
}
console.log(validPassword("2Fj(jjbFsuj")); // true
console.log(validPassword("eoZiugBf&g9")); // true
console.log(validPassword("hola")); // false
console.log(validPassword("")); // false
