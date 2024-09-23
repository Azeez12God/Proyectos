"use strict";

// Función que "construye" un curso con parámetro de nombre y descripción.
function creaCurso(nom, desc){
    return{
        nombre: nom,
        year: 2024,
        descripcion: desc,
        alumnado : [],
    }
}

let curso = creaCurso("2DAW", "Curso de grado superior de informática.");

// Función que genera un informe de las propiedades del objeto curso y sus valores.
function muestraCurso(curso){
    let informe = ``;
    for(let propiedad in curso){
        if(curso.hasOwnProperty(propiedad)) // Para comprobar si efectivamente la propiedad pertenece al objeto. 
            informe += `Propiedad: ${propiedad} - Valor: ${curso[propiedad]} \n`;
        else
            informe = `Ha habido un problema con una propiedad.`;
    }
    return informe;    
}

let discente = {
    id: 1,
    nombre: "Feo",
    apellidos: "De Verdad",
    aficiones: ["Dibujar","Videojuegos","Deportes"],
    notas: {
        primera: 7,
        segunda: 6,
        tercera: 8,
    },
};

function calcularMedia(discente){
    let media = (discente.notas.primera+discente.notas.segunda+discente.notas.tercera)/3;
    return media;
}