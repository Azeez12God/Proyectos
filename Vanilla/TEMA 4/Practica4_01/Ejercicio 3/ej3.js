"use strict";

window.onload = () => {
    const parrafo = document.getElementById("coordenadas");
    document.addEventListener("mousemove", (evento)=>{
        let posicionX = evento.pageX;
        let posicionY = evento.pageY;
        parrafo.innerHTML = `Posición X: ${posicionX} || Posición Y: ${posicionY}`;
    }, false);
};