"use strict"

// Función que genera un número aleatorio entre min y max.
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };

export {generarNumeroAleatorio, generarUuidAleatorio}