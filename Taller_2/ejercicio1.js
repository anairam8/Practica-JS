//Crea un programa que pida al usuario que ingrese un número y luego imprima en la consola todos los números pares desde 0 hasta ese número usando un bucle


    function contadorNumerosPares(cantidad){
        var pares = [];
    for(let i=0; i<cantidad; i++){
        if(i % 2 == 0){
            pares.push(i);
        }
    }
    return pares;
}
    console.log(contadorNumerosPares(6));
    console.log(contadorNumerosPares(10));
    console.log(contadorNumerosPares(30));