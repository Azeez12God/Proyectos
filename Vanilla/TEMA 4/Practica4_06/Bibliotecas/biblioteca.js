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

const comprobar5CaracteresYRequerido = (texto) => {
    let esValido = true;

    // Si el texto está vacío o tiene menos de 5 caracteres, es inválido.
    esValido = texto.trim() !== "" && texto.length >= 5;

    return esValido;
}

export{generarNumeroAleatorio, comprobarPar, comprobar5CaracteresYRequerido};