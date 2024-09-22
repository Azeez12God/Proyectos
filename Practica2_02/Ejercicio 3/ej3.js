"use strict";

function generaNumeros(cantidadNumeros){
    let numerosAleatorios = [];

    for(let i=0;i<cantidadNumeros;i++)
        numerosAleatorios[i] = Math.floor((Math.random()*100+1));

    return numerosAleatorios;
}

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

function imprimeArray(arrayImprimir){
    let arrayFormateado = '';
    for(let i=0;i<arrayImprimir.length;i++){
        arrayFormateado += `La posición ${i} del array es: ${arrayImprimir(i)}`;
        arrayFormateado += `\n`;
    }

    return arrayFormateado;
}

function calcular(funcionGenerar,funcionSumar,funcionImprimir){
    let primerArray = funcionGenerar(5); // Caso de prueba
    let segundoArray = funcionGenerar(5);
    let arraySuma = funcionSumar(primerArray,segundoArray);
    funcionImprimir(arraySuma);
}

console.log(calcular(generaNumeros,sumaArrays,imprimeArray));