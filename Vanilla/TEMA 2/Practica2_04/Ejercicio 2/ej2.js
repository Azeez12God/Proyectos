"use strict";

// Función para generar números aleatorios del 1 al 10 según la cantidad (reultilizada de la práctica 2).
function generaNumeros(cantidadNumeros){
    let informe = '';
    if(!isNaN(cantidadNumeros)){
        let numerosAleatorios = [];

        for(let i=0;i<cantidadNumeros;i++)
            numerosAleatorios[i] = Math.floor((Math.random()*10+1)); // Genera un número del 1 al 10.

        informe = `${numerosAleatorios}`;
    }

    else
        informe = `Ha ocurrido un error con la cantidad de números generados. El parámetro no es un número. ¡IDIOTA!`;

    return informe;
}

// Creamos los 3 arrays de 10 números aleatorios.
let array1 = generaNumeros(10);
let array2 = generaNumeros(10);
let array3 = generaNumeros(10);

// Filtramos los 3 arrays según los números mayores a 5.
let numerosFiltrados = [...array1,...array2,...array3].filter(num => num>5);

// Imprimimos el array correctamente formateado.
console.log(`Los números mayores a 5 de los tres array son: ${numerosFiltrados.map((valor) => {
    return valor;
})}`);