"use strict";

// Función para crear una tabla automáticamente a partir de uan estructura HTML ya creada y según las filas y columnas que desees.
const crearTabla = (tabla, filas,columnas) => {
    let tablaHTML = '';
    for (let i = 0; i < filas; i++) {
        tablaHTML += '<tr>';
        for (let j = 0; j < columnas; j++) {
            tablaHTML += '<td></td>';
        }
        tablaHTML += '</tr>';
    }
    tabla.innerHTML = tablaHTML;
}

// Función para añadir el evento click a los colores.
const anadirEventoColores = (tablaColores, columnaColor) => {
    tablaColores.addEventListener(
        "click",
        (evento)=>{
            if(evento.target.tagName === "TD")
                // El nombre de la clase de los td es el nombre de su color.
                columnaColor.innerHTML = evento.target.className;
        },
        false
    );
}

// Función para añadir los eventos para pintar la tabla según el color que contenga la celda escondida.
const anadirEventoCeldas = (tabla, columnaColor) => {
    // Nombramos una variable que gestiona si se está pintando.
    let pintando = false;

    const celdas = tabla.getElementsByTagName('td');
    for (let i = 0; i < celdas.length; i++) {
        // Añadimos el evento click a todas las celdas para alternar el estado de pintando.
        celdas[i].addEventListener('click', () => {
            pintando ? pintando = false : pintando=true;
        });

        // Añadimos el evento mousemove para pintar la tabla segun se mueva el ratón.
        celdas[i].addEventListener('mousemove', (evento) => {
            // Se pinta la tabla siempre y cuando esté pintando en true y se esté dando click a un TD.
            if (pintando && evento.target.tagName === "TD") {
                celdas[i].className = columnaColor.innerHTML;
            }
        });
    }
}

// Función para borrar la tabla (poner todas las celdas en blanco).
const borrarTabla = (botonBorrar,tabla) => {
    botonBorrar.addEventListener(
        "click",
        ()=>{
            const celdas = tabla.getElementsByTagName('td');
            Array.from(celdas).map((celda)=>{
            celda.className = "white";
            });
        },
        false
    );
}

export{crearTabla,anadirEventoColores,anadirEventoCeldas, borrarTabla}