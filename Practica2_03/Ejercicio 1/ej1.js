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