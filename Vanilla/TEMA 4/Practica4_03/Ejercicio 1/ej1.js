"use strict";

import { anadirEventoCeldas, anadirEventoColores, borrarTabla, crearTabla } from "../bibliotecas/biblioteca.js";

window.onload = () => {
    const tablaPintable = document.getElementById("tabla");
    const tablaColores = document.getElementById("tabla-colores");
    const columnaColor = document.getElementById("columnaColor");
    const botonBorrar = document.getElementById("boton-borrar");

    // Creamos una tabla de 50x60.
    crearTabla(tablaPintable,60,50);

    // Añadimos los eventos click a los colores para guardar el color en la fila escondida.
    anadirEventoColores(tablaColores, columnaColor);

    // Añadimos los eventos de pintar a las celdas cogiendo el color con la fila escondida.
    anadirEventoCeldas(tablaPintable,columnaColor);

    // Añadimos el evento de poner toda las celdas a blanco (borrar la tabla) al botón.
    borrarTabla(botonBorrar,tablaPintable);
}; // Fin del ondload.