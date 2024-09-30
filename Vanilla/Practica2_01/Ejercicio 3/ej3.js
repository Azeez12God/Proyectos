"use strict";

// Función que multiplica un número por 2 el número de veces que se requiera por parámetro
function multiplicarNumero(numeroVeces=1, numeroMultiplicar=1){
    let cadenaNumeros = [];
    for(let i=0;i<numeroVeces;i++){
        cadenaNumeros[i] = numeroMultiplicar;
        numeroMultiplicar *= 2;
    }
    return cadenaNumeros;
}

console.log(`Cadena de números multiplicados por 2: ${multiplicarNumero(4,6)}`);