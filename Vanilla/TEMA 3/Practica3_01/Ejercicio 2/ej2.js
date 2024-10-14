"use strict";

import { generarNumeroAleatorio } from "../Biblioteca/biblioteca.js";

const ul = document.getElementById("listaNumeros");

const idIntervalo = setInterval(()=>{
    ul.innerHTML += `<li>${generarNumeroAleatorio(1000)}</li>`;
}, 2000)