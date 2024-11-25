"use strict"

import { mezclarImagenes, verificarOrden } from "./biblioteca.js";

window.onload = () => {
    const zonaArrastrable = document.getElementById("zona-con-arrastrar");
    const contenedorPiezas = document.getElementById("arrastrables");
    const arrastrables = document.getElementsByClassName("arrastrable");
    const puzzle = document.getElementsByClassName("puzzle");
    const botonReiniciar = document.getElementById("restart");
    const mensaje = document.getElementById("mensaje");

    const ordenCorrecto = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];

    mezclarImagenes(arrastrables, contenedorPiezas);

    Array.from(arrastrables).map((arrastrable)=>{
        arrastrable.setAttribute("draggable",true);
    });

    zonaArrastrable.addEventListener(
        "dragstart",
        (evento)=>{
            if(evento.target.tagName === "IMG")
                evento.dataTransfer.setData("id",evento.target.id);
        },
        false
    );

    zonaArrastrable.addEventListener(
        "dragover",
        (evento)=>{
            evento.preventDefault();
        },
        false
    );

    zonaArrastrable.addEventListener(
        "drop",
        (evento)=>{
            evento.preventDefault();
            if(evento.target.classList.contains("soltable"))
                evento.target.appendChild(
                    document.getElementById(evento.dataTransfer.getData("id")));
            verificarOrden(puzzle,ordenCorrecto);   
        },
        false
    );

    botonReiniciar.addEventListener(
        "click",
        ()=>{
            Array.from(arrastrables).forEach((imagen)=>{
                contenedorPiezas.appendChild(imagen);
            });

            if(!mensaje.classList.contains("esconder"))
                mensaje.classList.add("esconder");

            mezclarImagenes(arrastrables,contenedorPiezas);
        },
        false
    );
}