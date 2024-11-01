"use strict";

import {addEventosCabeceras} from "../bibliotecas/biblioteca.js"

window.onload = () => {
    // Guardamos todas las cabeceras.
    const cabeceras = document.getElementsByClassName("cabecera");

    // Añadimos el evento click a todas las cabeceras.
    addEventosCabeceras(cabeceras);
} // Fin del window.onload.