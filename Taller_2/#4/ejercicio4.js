/*Escribe un programa que solicite al usuario dos números y luego muestre todos los números primos que hay entre esos dos números, incluyendo los extremos.

- Solicita al usuario que ingrese dos números enteros.
- Encuentra todos los números primos en el rango entre los dos números insertados, incluyendo esos dos números.
- Ejemplo de entrada: Inserta el primer número: 10, Inserta el segundo número: 20.
- Salida esperada: Los números primos entre 10 y 20 son: 11, 13, 17, 19.*/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

let firstNumber = prompt("Ingresa el primer número entero:");

if (firstNumber !== null && firstNumber.trim() !== "") {
  firstNumber = parseInt(firstNumber, 10);

  if (!isNaN(firstNumber)) {
    let secondNumber = prompt("Ingresa el segundo número entero:");

    if (secondNumber !== null && secondNumber.trim() !== "") {
      secondNumber = parseInt(secondNumber, 10);

      if (!isNaN(secondNumber)) {
        let primes = [];

        for (let i = firstNumber; i <= secondNumber; i++) {
          if (isPrime(i)) {
            primes.push(i);
          }
        }
        alert(
          `Los números primos entre ${firstNumber} y ${secondNumber} son: ${primes.join(
            ", "
          )}`
        );
      } else {
        alert(
          "El segundo número ingresado no es válido. Por favor, ingresa un número entero."
        );
      }
    } else {
      alert(
        "No se ingresó el segundo número. Por favor, ingresa el segundo número entero."
      );
    }
  } else {
    alert(
      "El primer número ingresado no es válido. Por favor, ingresa un número entero."
    );
  }
} else {
  alert(
    "No se ingresó el primer número. Por favor, ingresa el primer número entero."
  );
}
