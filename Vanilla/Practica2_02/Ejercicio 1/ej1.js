"use strict";

// Función que suma los número pasados por parámetro.
function sumaNumeros(){
    var suma = 0;
    let mensajeError;
    let esValido=true;
    // Comprobar que hay como mínimo 2 parámetros en la función.
    if(arguments.length>=2){
        for(let i=0;i<arguments.length;i++){
            // Comprobar que todos los parámetros sean de tipo númerico, si no da error.
            if(!isNaN(arguments[i]))
                suma += arguments[i];
            else{
                mensajeError = `ERROR: Un parámetro no es de tipo númerico.`;
                esValido = false;
                break;
            }
        }
    }
    else{
        mensajeError = `ERROR: La función tiene que tener como mínimo 2 parámetros.`;
        esValido = false;
    }

    // Si la función no es válida saltará el mensaje de error correspondiente.  
    return `${esValido ? `La suma de todos los números es ${suma}.` : `${mensajeError}`}`;
}

console.log(sumaNumeros(1,2,3)); // 6.
console.log(sumaNumeros(1,2,"e")); // Error numérico.
console.log(sumaNumeros()); // Error de parámetros.