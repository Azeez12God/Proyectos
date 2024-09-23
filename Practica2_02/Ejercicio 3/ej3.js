"use strict";

// Función que genera números aleatorios según la cantidad pasada y los guarda en un array.
function generaNumeros(cantidadNumeros){
    let numerosAleatorios = [];

    for(let i=0;i<cantidadNumeros;i++)
        numerosAleatorios[i] = Math.floor((Math.random()*100+1)); // Genera un número del 1 al 100.

    return numerosAleatorios;
}

// Función que suma las posiciones contrarias de 2 arrays mientras tengan la misma longitud.
function sumaArrays(array1,array2){
    let arraySumas = [];
    if(array1.length==array2.length){
        for(let primerValor=0;primerValor<array1.length;primerValor++){
            for(let segundoValor=array2.length-1;segundoValor>=0;segundoValor--){
                arraySumas[primerValor] = array1[primerValor] + array2[segundoValor];
            }
        }

        return arraySumas;
    }

    else
        return `Ha ocurrido un error: La longitud de los arrays no es la misma.`;
}

// Función que imprime el array de la suma de los arrays debidamente formateado.
function imprimeArray(arrayImprimir){
    let arrayFormateado = '';
    for(let i=0;i<arrayImprimir.length;i++){
        arrayFormateado += `La posición ${i} del array es: ${arrayImprimir[i]}`;
        arrayFormateado += `\n`;
    }

    return arrayFormateado;
}

function calcular(funcionGenerar,funcionSumar,funcionImprimir){
    let primerArray = funcionGenerar(5); // Caso de prueba.
    let segundoArray = funcionGenerar(5);
    let arraySuma = funcionSumar(primerArray,segundoArray);
    return funcionImprimir(arraySuma);
}

console.log(calcular(generaNumeros,sumaArrays,imprimeArray));