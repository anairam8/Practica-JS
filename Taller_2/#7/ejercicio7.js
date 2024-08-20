
    function calcularFactorial(number){
        let result= 1;
        if(number <= 0){
            alert("El numero que estas ingresando es negativo");
        } else {
            for(let i=1; i <= number; i++){ 
                result = result * i;
            }
        }
        console.log(result);
        document.write(result);
    }
    let number = parseInt(prompt("Ingrese un numero no negativo para sacar su factorial"));
    calcularFactorial(number);