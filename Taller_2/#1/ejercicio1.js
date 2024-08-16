// cspell:disable
// Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento.


// - Solicita al usuario que ingrese los gastos estimados para cada categoría.
// - Calcula el coste total sumando todos los gastos.
// - Muestra el coste total al usuario.
// - Ejemplo de entrada: Gastos de alojamiento: 200€, Gastos de alimentación: 150€, Gastos de entretenimiento: 100€.
// - Salida esperada: El coste total del viaje es 450€.

    // Solicitar los gastos estimados al usuario
    let alojamiento = parseInt(prompt("Coloque gasto estimado para el alojamiento en euros"));
    let alimentacion = parseInt(prompt("Cuanto desea gastar en alimentacion en euros"));
    let entretenimiento = parseInt(prompt("Cuanto desea gastar en entretenimiento en euros"));

    if( isNaN(alojamiento) || isNaN(alimentacion) || isNaN(entretenimiento)){
        document.write("Por favor digite numeros validos");
    } else {
        var gastoTotal= alojamiento + alimentacion + entretenimiento;
    }
    
    document.write(`Gastos de alojamiento: ${alojamiento} <br>`);
    document.write(`Gastos de alimentacion: ${alimentacion} <br>`);
    document.write(`Gastos de entretenimiento: ${entretenimiento} <br>`);
    document.write(`Gasto Total: ${gastoTotal}`);
