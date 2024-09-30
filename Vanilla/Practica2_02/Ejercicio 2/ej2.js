"use strict";

// Función que calcula todas las multiplicaciones de una tabla según el número.
function multiplicar(num){
    let lineaTabla = '';
    for(let i=0;i<=10;i++)
        lineaTabla += `${num} x ${i} = ${num*i}\n`;

    return lineaTabla;
}

// Función que calcula todas las tablas del número pasado como parámetro con la función multiplicar.
function tablas(num,funcion){
    if(!isNaN(num)){
        let tablasEnteras = '';

        for(let i=num;i>=2;i--){
            tablasEnteras += `TABLA DEL ${i}:\n \n`;
            tablasEnteras += funcion(i);
            tablasEnteras += `\n`;
        }

        return tablasEnteras;
    }
    else
        return `Ha ocurrido un error: No has puesto un número como parámetro.`;
}

console.log(tablas(5,multiplicar)); // Caso de prueba.
console.log(tablas('error',multiplicar)); // Caso de prueba erróneo