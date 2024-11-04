"use strict";

import {crearTabla} from "../bibliotecas/biblioteca.js";

window.onload = () => {
    const tablaPintable = document.getElementById("tabla");
    const tablaColores = document.getElementById("tabla-colores");
    const columnaColor = document.getElementById("columnaColor");
    const botonBorrar = document.getElementById("boton-borrar");

    // Nombramos una variable que gestiona si se está pintando.
    let pintando = false;

    // Creamos una tabla de 50x60.
    crearTabla(tablaPintable,60,50);

    // Añadimos los eventos click a los colores para guardar el color en la fila escondida.
    tablaColores.addEventListener(
        "click",
        (evento)=>{
            if(evento.target.tagName === "TD")
                // El nombre de la clase de los td es el nombre de su color.
                columnaColor.innerHTML = evento.target.className;
        },
        false
    );

    // Añadimos los eventos de pintar a las celdas cogiendo el color con la fila escondida.
    const celdas = tablaPintable.getElementsByTagName('td');
    for (let i = 0; i < celdas.length; i++) {
        // Añadimos el evento click a todas las celdas para alternar el estado de pintando.
        celdas[i].addEventListener('click', () => {
            pintando ? pintando = false : pintando=true;
        });

        // Añadimos el evento mousemove para pintar la tabla segun se mueva el ratón.
        celdas[i].addEventListener('mousemove', (evento) => {
            // Se pinta la tabla siempre y cuando esté pintando en true y se esté dando click a un TD.
            if (pintando && evento.target.tagName === "TD") {
                celdas[i].className = columnaColor.innerHTML;
            }
        });
    }

    // Añadimos el evento de poner toda las celdas a blanco (borrar la tabla) al botón.
    botonBorrar.addEventListener(
        "click",
        ()=>{
            const celdas = tablaPintable.getElementsByTagName('td');
            Array.from(celdas).map((celda)=>{
            celda.className = "white";
            });
        },
        false
    );
}; // Fin del onload.