/* Pedir una hora, minuto y segundo y mostrar la hora en el segundo siguiente */

let hour = parseInt(prompt('Ingrese la hora (0-23):'), 10);
let minutes = parseInt(prompt('Ingrese los minutos (0-59):'), 10);
let seconds = parseInt(prompt('Ingrese los segundos (0-59):'), 10);

// Validación de entrada
if (isNaN(hour) || isNaN(minutes) || isNaN(seconds) || hour < 0 || hour > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    alert("Por favor, ingrese valores válidos para la hora, minutos y segundos.");
} else {
    // Incrementar segundos
    seconds++;

    // Manejo del desbordamiento
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hour++;
            if (hour === 24) {
                hour = 0;
            }
        }
    }

    // Formatear los valores para que tengan dos dígitos
    let formattedHour = String(hour).padStart(2, '0');
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');

    // Mostrar la hora con el segundo incrementado
    alert(
        `Esta es la hora con el aumento de 1 segundo: ${formattedHour}:${formattedMinutes}:${formattedSeconds}`
    );
}




/*let hour = parseFloat(prompt('Ingrese la hora:'));
let minutes = parseFloat(prompt('Ingrese los minutos'));
let seconds = parseFloat(prompt('Ingrese los segundos'));


second = seconds++;

alert(`Esta es la hora con el aumento de 1 segundo: ${hour}:${minutes}:${seconds}`)
*/
