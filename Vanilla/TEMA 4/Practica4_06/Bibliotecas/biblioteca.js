"use strict";

// Función que genera un número aleatorio entre min y max.
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para comprobar si un número es par.
const comprobarPar = (numero) => {
    let esPar;

    if(numero%2==0)
        esPar = true;
    else
        esPar = false;

    return esPar;
};

export{generarNumeroAleatorio, comprobarPar};