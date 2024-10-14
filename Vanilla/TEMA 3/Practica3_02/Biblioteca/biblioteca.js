"use strict";

// Función que reemplaza la palabra "sexo" por "Contenido Bloqueado"
function bloquearContenidoInapropiado() {
    // Reemplaza "sexo" por "Contenido Bloqueado" directamente en el HTML
    document.body.innerHTML = document.body.innerHTML.replaceAll(
        'sexo', 
        '<span class="bloqueado">Contenido Bloqueado</span>'
    );
}

// Función que crea una tabla dinámica según el número de filas y columnas pasados por parámetro.
function crearTablaDinamica(numFilas,numColumnas){
    let tabla = document.createElement("table"); // Creamos la tabla en el documento.
    let cont = 1;
    
    for(let filas=0;filas<numFilas;filas++){
        let fila = document.createElement("tr"); // Creamos la fila.
        for(let columnas=0;columnas<numColumnas;columnas++){
            let columna = document.createElement("td"); // Creamos la columna.
            columna.innerHTML += `${cont}`;
            cont++;
            fila.appendChild(columna); // Metemos la columna en la fila.
        }
        tabla.appendChild(fila);  // Metemos la fila en la tabla.
    }

    document.body.appendChild(tabla); // Metemos la tabla con sus filas y columnas en el documento.
}

export {bloquearContenidoInapropiado, crearTablaDinamica};