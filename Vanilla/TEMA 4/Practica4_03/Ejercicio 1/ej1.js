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
    tablaPintable.addEventListener(
        "click",
        (evento)=>{
            if(evento.target.tagName === "TD")
                pintando ? pintando=false : pintando=true;
        },
        false
    );

    tablaPintable.addEventListener(
        "mousemove",
        (evento)=>{
            if(evento.target.tagName === "TD" && pintando)
                evento.target.className = columnaColor.innerHTML;
        },
        false
    );

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