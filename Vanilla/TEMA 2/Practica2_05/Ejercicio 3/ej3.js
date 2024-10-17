"use strict";

import { calculaLetraDNI } from "../biblioteca.js";

let numerosDNI = [];
const idIntervalo = setInterval(()=>{
    let numeroDNI = prompt(`Por favor, ingresa tu número de DNI (sin letra) o escribe -1 para finalizar:Por favor, ingresa tu número de DNI (sin letra) o 
    escribe -1 para finalizar:`,`00000001`);

    if(parseInt(numeroDNI) === -1){
        clearInterval(idIntervalo);
        console.log(`Fin del programa. Lista de DNI con sus letras:`);
        numerosDNI.forEach(dni => {
            console.log(calculaLetraDNI(dni)); 
        })
    }
    else if(numeroDNI !== null && numeroDNI.length === 8 && !isNaN(numeroDNI)){
        numerosDNI = [...numerosDNI, parseInt(numeroDNI)];
    }
    else
        console.log(`No has insertado un DNI válido idiota. Vuelve a insertar otro.`);
}, 5000);