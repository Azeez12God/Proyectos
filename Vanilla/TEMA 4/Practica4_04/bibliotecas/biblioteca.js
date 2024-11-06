"use strict";

// FUnción para verificar el orden del puzzle y saber si está resuelto.
function verificarOrden(puzzle, ordenImagenes) {
    const mensajeFelicitacion = document.getElementById("mensaje");
    let completadoCorrecto = true;

    for (let i = 0; i < puzzle.length; i++) {
        const pieza = puzzle[i].firstChild; // El child es la imagen, en caso de que haya.
        
        // Verifica si cada div tiene una imagen y si está en el orden correcto
        if (!pieza || pieza.id !== ordenImagenes[i]) {
            completadoCorrecto = false;
            break; // Salir del bucle si encontramos una imagen incorrecta o falta una.
        }
    }

    // Cuando está completado le quita la clase esconder (se muestra el mensaje), si luego se quita una pieza o  algo así, se vuelve a esconder.
    if (completadoCorrecto) {
        mensajeFelicitacion.classList.remove("esconder");
    } else if (!mensajeFelicitacion.classList.contains("esconder")) {
        mensajeFelicitacion.classList.add("esconder");
    }
}

// Función para mezclar aleatoriamente las imágenes usando innerHTML.
function mezclarImagenes(arrastrables,contenedorImagenes) {
    const imagenesArray = Array.from(arrastrables); // Convertir a array para manipular.
    let indicesUsados = []; // Array para guardar los índices ya utilizados.
    contenedorImagenes.innerHTML = ""; // Vaciar el contenedor antes de reinsertar.

    while (indicesUsados.length < imagenesArray.length) {
        const randomIndex = Math.floor(Math.random() * imagenesArray.length);

        // Solo añadir el índice si no está ya en indicesUsados
        if (!indicesUsados.includes(randomIndex)) {
            indicesUsados = [...indicesUsados, randomIndex]; // Añadir usando spread
            contenedorImagenes.innerHTML += imagenesArray[randomIndex].outerHTML; // Añadir imagen devolviendo el HTML del elemento completo.
        }
    }
}

export {verificarOrden, mezclarImagenes}