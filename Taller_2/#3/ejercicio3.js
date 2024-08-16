// cspell:disable
// Crea un programa que calcule el precio final de un producto después de aplicarle un descuento.

// - Solicita al usuario que inserte el precio original del producto.
// - Solicita al usuario que inserte el porcentaje de descuento a aplicar (por ejemplo, 10 para un descuento del 10%).
// - Utiliza una función para calcular el precio final después de aplicar el descuento.
// - Muestra el precio final al usuario.

// Ejemplo de entrada:

// Inserta el precio original del producto: 50

// Inserta el porcentaje de descuento a aplicar: 20

// Salida esperada: El precio final del producto después de aplicar un descuento del 20% es: 40 euros.

let precioOriginal = parseInt(prompt("Ingrese el precio original del producto"));
let descuento = parseInt(prompt("Ingrese descuento aplicar"));

function precioFinal(precioOriginal, descuento) {
    let descuentoAplicado = (precioOriginal * descuento) / 100;
    let resultado = precioOriginal - descuentoAplicado;
    return resultado;
}  
    let resultado = precioFinal(precioOriginal, descuento);
    
        document.write(`Precio Original: ${precioOriginal}<br>`);
        document.write(`El descuento fue de: ${descuento}<br>`);
        document.write(`El precio final del producto despues de aplicar un descuento del ${descuento}% es: ${resultado} euros`);

