"use strict";

import { generarNumeroAleatorio, generarColorAleatorio } from "../Biblioteca/biblioteca.js";

// Cada segundo coge un párrafo aleatorio y le cambia el color de fondo.
const idInterval = setInterval(()=>{
    const parrafos = document.getElementsByTagName("p");
    // Coge un párrafo aleatorio.
    let parrafoAleatorio = parrafos[generarNumeroAleatorio(parrafos.length)];
    // Le cambio el color de fondo.
    parrafoAleatorio.style.backgroundColor = generarColorAleatorio();
},1000);