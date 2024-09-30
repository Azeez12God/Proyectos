"use strict";

let nombresPropios = ["Alberto", "Pablo", "Tristán", "Daniel", "Carlos"];

// Mapeamos el array y convierte cada valor a mayúscula.
console.log(nombresPropios.map(valor => valor.toUpperCase()));

// Ordenamos el array alfabéticamente (sort) y luego lo mostramos al revés (reverse).
console.log(nombresPropios.sort().reverse());

// Una función que crea objetos nombre.
function creaNombre(valor,indice){
    return{
        id: indice,
        nombre: valor,
    };
}

// Creamos objetos nombre según los valores del array de nombres.
let arrayObjetos = nombresPropios.map(creaNombre);

// Mostramos por consola los objetos JSON desestructurados.
arrayObjetos.forEach(function ({id, nombre}){
    console.log(`ID: ${id+1}, Nombre: ${nombre}`);
});