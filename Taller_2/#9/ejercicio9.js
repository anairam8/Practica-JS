// Pedir un número y decir si es un número negativo, si es positivo o cero

    let num = parseInt(prompt("Digite un numero positivo o negativo"));

    if (num > 0){
        document.write(`el numero: ${num} es positivo`);
    }
    else if(num < 0){
        document.write(`el numero: ${num} es negativo`);
    } else {
        document.write("El numero es 0");
    }