"use strict";

// Función que genera un número del 0 al número pasado por parámetro.
function generarNumeroAleatorio(max) {
    let resultado;
    if (typeof max !== 'number' || max <= 0) 
        resultado = 'El parámetro debe ser un número mayor que 0.';   
    else
        resultado = Math.floor(Math.random() * max+1);
    
    return resultado;
}

// Función reutilizado de la práctica 2_05 que convierte un texto a cani: alteranndo mayúsculas y minúsculas y poniendo H mayúsculas al final.
function toCani(texto){
    let resultado = '';
    let mayuscula = true;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        // Reemplazar 'c' o 'C' por 'k' o 'K'
        if (letra.toLowerCase() === 'c') {
            letra = mayuscula ? 'K' : 'k';
        }

        // Alternar entre mayúsculas y minúsculas
        if (mayuscula) {
            resultado += letra.toUpperCase();
        } else {
            resultado += letra.toLowerCase();
        }

        // Cambiar el estado de mayúscula para la próxima letra
        if (letra !== ' ') {
            mayuscula = !mayuscula;
        }
    }

    // Generar entre 2 y 5 letras H al final
    let cantidadH = Math.floor(Math.random() * 4) + 2;
    resultado += 'H'.repeat(cantidadH);

    return resultado;
}

// Función que inserta después de un elemento otro para el ejercicio 4.
function insertAfter(nuevoElemento, existenteElemento) {
    // Obtenemos el padre del elemento existente.
    const padre = existenteElemento.parentNode;

    // Insertamos el nuevo elemento antes del siguiente hermano de existenteElemento.
    if (existenteElemento.nextSibling) {
        padre.insertBefore(nuevoElemento, existenteElemento.nextSibling);
    } else {
        // Si no hay siguiente hermano, simplemente lo añadimos al final.
        padre.appendChild(nuevoElemento);
    }
}

export {generarNumeroAleatorio, toCani, insertAfter};