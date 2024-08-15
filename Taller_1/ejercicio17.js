// 17. Capitalizar cada palabra
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra

function capitalizar(palabra){
    let palabras = palabra.split(" ");
    for(let i=0; i < palabras.length; i++){
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    return palabras.join(" ");
}
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""

