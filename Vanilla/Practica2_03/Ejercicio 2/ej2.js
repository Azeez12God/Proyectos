"use strict";

// Función que "construye" un curso (en este caso por defecto).
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
            informe = `Ha habido un problema con la propiedad ${propiedad}.`;
    }
    return informe;    
}

console.log(muestraCurso(curso));