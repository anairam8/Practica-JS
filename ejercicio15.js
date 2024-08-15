// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U

function transcribir(ADN){
    let cadena_final= [];
    for(let i=0; i<ADN.length;i++){
        if (ADN[i] === "G") {
            cadena_final.push("C");
        } else if (ADN[i] === "C") {
            cadena_final.push("G");
        } else if (ADN[i] === "T") {
            cadena_final.push("A");
        } else if (ADN[i] === "A") {
            cadena_final.push("U");
        }
    }
    return cadena_final.join("");
}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"