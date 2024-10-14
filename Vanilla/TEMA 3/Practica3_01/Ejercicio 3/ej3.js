"use strict";

import {toCani, generarNumeroAleatorio} from "../Biblioteca/biblioteca.js";
import { quijoteFrases } from "./quijoteFrases.js";

const tabla = document.getElementById("bodyTabla");

// Cada dos segundos añadire una fila a la tabla con una frase del Quijote normal y otra en cani.
const idIntervalo = setInterval(()=>{
    let frase = quijoteFrases[generarNumeroAleatorio(quijoteFrases.length-1)]
    tabla.innerHTML += `<tr>
                          <td>${frase}</td>
                          <td>${toCani(frase)}</td>
                        </tr>`;
},2000)