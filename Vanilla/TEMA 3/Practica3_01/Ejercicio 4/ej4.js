"use strict";

import { insertAfter } from "../Biblioteca/biblioteca.js";

const idTimeOut = setTimeout(()=>{
    let elementoAfter = document.createElement("p");
    let contenido = document.createTextNode(
        "Nuevo párrafo creado después del primero."
    );
    elementoAfter.appendChild(contenido);
    let primerParrafo = document.getElementById("parrafoAntes");

    insertAfter(elementoAfter, primerParrafo);
}, 2000)