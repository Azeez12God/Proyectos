"use strict";

// Función para crear una tabla automáticamente a partir de uan estructura HTML ya creada y según las filas y columnas que desees.
const crearTabla = (tabla, filas, columnas) => {
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement("td");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}

export{crearTabla}