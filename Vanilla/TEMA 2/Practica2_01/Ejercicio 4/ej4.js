"use strict";

// Función que comprueba si los números del precio y del impuesto son válidos.
function compruebaNumeros(precio,impuesto){
    return !isNaN(precio) && !isNaN(impuesto);
}

// Función que calcula el precio final del producto mientras los números sean válidos.
function precioFinal(producto="Producto genérico",precio=100,impuesto=21){
    if(compruebaNumeros(precio,impuesto))
        console.log(`El producto: ${producto} tiene un precio final de ${(precio*(impuesto/100)).toFixed(2)}.`);
    else
        console.log(`ERROR: Algún número no es correcto.`);
}

// Casos de prueba
precioFinal("Ordenador",250,30);
precioFinal();
precioFinal("Producto error", "Error", 20);