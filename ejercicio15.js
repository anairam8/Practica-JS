// Escribir una función llamada transcribeAdnToArn que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U

function transcribeAdnToArn(adn) {
  let finalTranscript = [];
  for (let i = 0; i < adn.length; i++) {
    if (adn[i] === "G") {
      finalTranscript.push("C");
    } else if (ADN[i] === "C") {
      finalTranscript.push("G");
    } else if (ADN[i] === "T") {
      finalTranscript.push("A");
    } else if (ADN[i] === "A") {
      finalTranscript.push("U");
    }
  }
  return finalTranscript.join("");
}

console.log(transcribeAdnToArn("ACGT")); // "UGCA"
console.log(transcribeAdnToArn("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
