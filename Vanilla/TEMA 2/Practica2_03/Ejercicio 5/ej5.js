"use strict";

// Función que "construye" un curso con parámetro de nombre y descripción.
function creaCurso(nom, desc){
    return{
        nombre: nom,
        year: 2024,
        descripcion: desc,
        alumnado : [],

        // Función que añade al array de alumnado el objeto discente de abajo.
        matricular: function(discente){
            this.alumnado.push(discente); // Añade la información del objeto a la última posición del array.
            return (`Alumno: ${discente.nombre} ${discente.apellidos} matriculado en el curso.`);
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
            informe = `Ha habido un problema con la propiedad ${propiedad} en curso. \n`;
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

// Función que comprueba si el tipo de la propiedad es un OBJETO.
function compruebaObjeto(propiedadObjeto){
    return (typeof propiedadObjeto === 'object') ? true : false;
}

// Función que comprueba si el tipo de la propiedad es una FUNCIÓN.
function compruebaFuncion(propiedadObjeto){
    return (typeof propiedadObjeto === 'function') ? true : false;
}

// Función que comprueba si el tipo de la propiedad es un ARRAY.
function compruebaArray(propiedadObjeto){
    return (Array.isArray(propiedadObjeto)) ? true : false;
}

// Función que imprime un informe completo de cualquier objeto.
function imprimeObjeto(objeto){
    let informe = ``;
    for(let propiedad in objeto){
        let valor = objeto[propiedad];
        if(objeto.hasOwnProperty(propiedad)){ // Para comprobar si efectivamente la propiedad pertenece al objeto.
            // Si es array devuelve los elementos de ese array.
            if(compruebaArray(valor)){
                informe += `Propiedad del objeto: ${propiedad} - Es un array. Contiene: \n`;
                for(let i = 0; i < valor.length; i++)
                    informe += `  Elemento ${i + 1}: ${valor[i]} \n`;
                
            }
            // SI es objeto o función simplemente informa qué son.
            else if(compruebaFuncion(valor))
                informe += `Propiedad del objeto: ${propiedad} - Es una función. \n`;
            else if(compruebaObjeto(valor))
                informe += `Propiedad del objeto: ${propiedad} - Es un objeto. \n`;
            else
                informe += `Propiedad del objeto: ${propiedad} - Valor: ${valor} \n`;
        }
        else
            informe = `Ha habido un problema con la propiedad ${propiedad} en el objeto. \n`;
    }
    return informe;  
}

//Casos de prueba
console.log(imprimeObjeto(curso));
console.log(imprimeObjeto(discente));