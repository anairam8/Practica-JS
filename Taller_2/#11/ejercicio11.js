
    let juan = parseInt(prompt("Ingrese el los dolares de Juan"));
    let david = juan / 2;
    let jose = (juan / david) /2

    promedio = (juan + david + jose) / 3;
    promedio = Math.round(promedio);

    document.write(`El dinero de Juan es: ${juan} <br> El dinero de david es: ${david} <br> El dinero de Jose es: ${jose} <br> Y el promedio total es de: ${promedio}`);