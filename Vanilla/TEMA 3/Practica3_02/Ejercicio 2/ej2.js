"use strict";

import { crearTablaDinamica, esPrimo } from "../Biblioteca/biblioteca.js";

crearTablaDinamica(10,10);

const idTimeout = setTimeout(()=>{
    let numerosTabla = document.getElementsByTagName("td");
    // Recorrer cada <td>
    for (let i = 0; i < numerosTabla.length; i++) {
        const valor = parseInt(numerosTabla[i].textContent); // Convertir el contenido del <td> a número
        if (!isNaN(valor) && esPrimo(valor)) { // Verificar si es un número y primo
            numerosTabla[i].classList.add('primo'); // Agregar la clase para cambiar el estilo
        }
    }
}, 2000)