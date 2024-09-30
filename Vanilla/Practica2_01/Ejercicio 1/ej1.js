"use strict";

// Creamos una función para calcular el IMC.
function calcularIMC(masa, altura){
    let imc = masa / (altura * altura);
    return imc;
}

// Guardamos las masas y alturas de Marcos y Juan.
let masaMarcos = 50;
let alturaMarcos = 180;
let masaJuan = 65;
let alturaJuan = 175;

// Calculamos ambos IMC
let imcMarcos = calcularIMC(masaMarcos, alturaMarcos);
let imcJuan = calcularIMC(masaJuan, alturaJuan);

// Comprobamos si el IMC de Marcos es mayor que el de Juan.
function comprobarIMC(imcMarcos, imcJuan){
    let esMayor;

    if(imcMarcos > imcJuan)
        esMayor = true;
    else
        esMayor = false;

    return esMayor;
}

console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${comprobarIMC(imcMarcos, imcJuan)}`);