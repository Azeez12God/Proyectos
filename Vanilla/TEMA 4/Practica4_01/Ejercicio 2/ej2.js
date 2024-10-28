"use strict"

import { generarColorAleatorio } from "../Biblioteca/biblioteca.js";

window.onload = ()=>{

    document.body.addEventListener("click",(evento)=>{
        navegador.style.backgroundColor = generarColorAleatorio();
        console.log("hola");
    }, false);
};
