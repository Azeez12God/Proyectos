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

function esPrimo(numero) {
    let esprimo = numero > 1; // Asumimos que es primo si es mayor que 1

    // Verificar si el número es divisible por algún número desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esprimo = false; // No es primo si es divisible por otro número
            break; // Salimos del bucle si encontramos un divisor
        }
    }

    return esprimo; // Devolvemos el resultado final
}

// Función que genera un número del 0 al número pasado por parámetro.
function generarNumeroAleatorio(max) {
    let resultado;
    if (typeof max !== 'number' || max <= 0) 
        resultado = 'El parámetro debe ser un número mayor que 0.';   
    else
        resultado = Math.floor(Math.random() * max);
    
    return resultado;
}

// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


export {bloquearContenidoInapropiado, crearTablaDinamica, esPrimo, generarNumeroAleatorio, generarColorAleatorio};