/*Pedir un number hasta que se ingrese el number 0 o negativo,
 luego mostrar la suma de todos los números ingresados
 */


 let add = 0;
 let number;
 
 do {
     number = parseInt(prompt("Ingresa un número (ingresa 0 o un número negativo para terminar):"));
     if (number > 0) {
         add += number;
     }
 } while (number > 0);
 
 alert("La suma de todos los números ingresados es: " + add);
 