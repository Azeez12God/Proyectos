"use strict";

import { crearTabla } from "./biblioteca.js";

window.onload = () => {
    const tablaDibujable = document.getElementById("tabla");
    const colores = document.getElementById("tabla-colores");
    const color = document.getElementById("columnaColor");
    const botonBorrar = document.getElementById("boton-borrar");

    crearTabla(tablaDibujable);
    let pintando = false;

    colores.addEventListener(
        "click",
        (evento)=>{
            if(evento.target.tagName === "TD"){
                color.innerHTML = evento.target.className;
            }
        },
        false
    );

    tablaDibujable.addEventListener(
        "click",
        (evento)=>{
            if(evento.target.tagName === "TD")
                pintando = !pintando;
        },
        false
    );

    tablaDibujable.addEventListener(
        "mousemove",
        (evento)=>{
            if(evento.target.tagName === "TD" && pintando)
                evento.target.style.backgroundColor = color.innerHTML;
        },
        false
    );

    botonBorrar.addEventListener(
        "click",
        ()=>{
            const celdas = tablaDibujable.getElementsByTagName("TD");
            Array.from(celdas).map((celda)=>{
                celda.style.backgroundColor = "white";
            });
            
        },
        false
    );
}