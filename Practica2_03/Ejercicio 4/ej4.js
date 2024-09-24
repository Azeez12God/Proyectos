"use strict";

// Función que "construye" un curso con parámetro de nombre y descripción.
function creaCurso(nom, desc){
    return{
        nombre: nom,
        year: 2024,
        descripcion: desc,
        alumnado : [],
        matricular: function(discente){
            
        },
    }
}

let curso = creaCurso("2DAW", "Curso de grado superior de informática.");

// Función que genera un informe de las propiedades del objeto curso y sus valores.
function muestraCurso(curso){
    let informe = ``;
    for(let propiedad in curso){
        if(curso.hasOwnProperty(propiedad)) // Para comprobar si efectivamente la propiedad pertenece al objeto. 
            informe += `Propiedad del curso: ${propiedad} - Valor: ${curso[propiedad]} \n`;
        else
            informe = `Ha habido un problema con la propiedad ${propiedad} en curso.`;
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
    // Método que calcula la media de las tres evaluaciones.
    calcularMedia: function(){
        let media = Math.floor(discente.notas.primera+discente.notas.segunda+discente.notas.tercera)/3; // Redondea la media.
        return `La nota media de las evaluaciones es: ${media}`;
    },
    // Método que imprime las aficiones debidamente formateadas.
    imprimirAficiones: function(){
        let aficiones = '';
        for(let i=0;i<discente.aficiones.length;i++)
            aficiones += `Afición ${i+1}: ${discente.aficiones[i]} \n`;
        return aficiones;
    },
    // Método que imprime todas las propiedades del objeto.
    imprimirInforme: function(){
        let informe = ``;
        for(let propiedad in discente){
            if(discente.hasOwnProperty(propiedad))
                informe += `Propiedad de discente: ${propiedad} - Valor: ${discente[propiedad]} \n`;
            else
                informe += `Ha habido un problema con la propiedad ${propiedad} en discente.`;
        }

        return informe;
    },
};