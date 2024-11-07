"use strict"

import { generarNumeroAleatorio } from "../Bibliotecas/biblioteca.js";

window.onload = () => {
    const cajaBotones = document.getElementById("cajaBotones"); 

    for(let i=0;i<100;i++){
        let numeroAleatorio =  generarNumeroAleatorio(100,1000);
        cajaBotones.innerHTML += `<input type="checkbox" id="numero${i}" name="numeroCheckbox" value=${numeroAleatorio}/>`;
        cajaBotones.innerHTML += `<label for="numero${i}">${numeroAleatorio}</label>`;
    }
}; // Fin del onload.
