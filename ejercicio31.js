// 31. Distancia entre dos strings
// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

// Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

function distancia(palabra1, palabra2) {
    let diferencias = 0;
    let longitudMinima = Math.min(palabra1.length, palabra2.length);
    
    // Comparar caracteres en posiciones correspondientes
    for (let i = 0; i < longitudMinima; i++) {
        if (palabra1[i] !== palabra2[i]) {
            diferencias++;
        }
    }
    
    // Añadir diferencias por longitud desigual
    diferencias += Math.abs(palabra1.length - palabra2.length);
    
    return diferencias;
}

// Ejemplo de uso
console.log(distancia("casa", "caza")); // 1
console.log(distancia("sol", "sal")); // 1
console.log(distancia("sol", "sombra")); //  4
console.log(distancia("sombra", "sol")); //  4