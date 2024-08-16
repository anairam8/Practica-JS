// 31. Distancia entre dos strings
// Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

// Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).

function levenshteInDistance(word1, word2) {
  let differences = 0;
  let minimumLength = Math.min(word1.length, word2.length);

  // Comparar caracteres en posiciones correspondientes
  for (let i = 0; i < minimumLength; i++) {
    if (word1[i] !== word2[i]) {
      differences++;
    }
  }

  // Añadir diferencias por longitud desigual
  differences += Math.abs(word1.length - word2.length);

  return differences;
}

// Ejemplo de uso
console.log(levenshteInDistance("casa", "caza")); // 1
console.log(levenshteInDistance("sol", "sal")); // 1
console.log(levenshteInDistance("sol", "sombra")); //  4
console.log(levenshteInDistance("sombra", "sol")); //  4
