/*2. Calcular Impuestos

Escribir una función llamada calculedTaxes que reciba dos argumentos numéricos: 
edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 
1000 debe retornar ingresos * 40%. De lo contrario retornar 0.*/

function calculedTaxes(age, income) {
  if (age >= 18 && income >= 1000) {
    return income * 0.4;
  } else {
    return 0;
  }
}

// código de prueba
console.log(calculedTaxes(18, 1000)); // 400
console.log(calculedTaxes(40, 10000)); // 4000
console.log(calculedTaxes(17, 5000)); // 0
console.log(calculedTaxes(30, 500)); // 0
