/*Imprimir un arreglo

Escribir una función llamada imprimirArreglo que reciba 
un arreglo e imprima cada elemento en una línea a parte:
*/

function printList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

// código de prueba
printList([1, "Hola", 2, "Mundo"]);
