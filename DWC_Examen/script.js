"use strict"

import {compruebaLibro, creaLibro, filtrarLibros, muestraEstadisticas, muestraLibros, validaLibro } from "./biblioteca/biblioteca.js";

/** No me acordaba de como filtrar el array para borrar justo el de la tabla, tampoco sabía como contar los géneros.
 * El método de validar lo he intentado hacer pero no me ha funcionado, si puedes, échale un ojo.
 */

window.onload = () => {
    const inputTitulo = document.getElementById("titulo");
    const inputAutor = document.getElementById("autor");
    const selectGenero = document.getElementById("genero");
    const addLibro = document.getElementById("boton-guardar");
    const seccionErrores = document.getElementById("errores-seccion");
    const tablaLibros = document.getElementById("tabla-libros");
    const bodyLibros = tablaLibros.lastElementChild;
    const selectFiltro = document.getElementById("filtros-genero");

    let listaLibros = [];
    let contadorLibros = 0;

    addLibro.addEventListener(
        "click",
        (evento)=> {
            evento.preventDefault();

            const titulo = inputTitulo.value;
            const autor = inputAutor.value;
            const genero = selectGenero.value;
            let esValido = compruebaLibro(titulo,autor,genero);       

            if(esValido){
                if(listaLibros.length === 0){
                    let libro = creaLibro(contadorLibros,titulo, autor, genero);
                    listaLibros = [...listaLibros, libro];
                    seccionErrores.innerHTML = "";
                    muestraLibros(listaLibros);
                    muestraEstadisticas(listaLibros);
                    contadorLibros++;
                }

                else if(validaLibro(listaLibros,titulo,autor)){
                    let libro = creaLibro(contadorLibros,titulo, autor, genero);
                    listaLibros = [...listaLibros, libro];
                    seccionErrores.innerHTML = "";
                    muestraLibros(listaLibros);
                    muestraEstadisticas(listaLibros);
                    contadorLibros++;
                }

                else
                    seccionErrores.innerHTML = "Has insertado 2 libros con el mismo título y autor.";
            }

            else
                seccionErrores.innerHTML = "Hay algún error en los datos del libro."        
        },
        false
    );

    bodyLibros.addEventListener(
        "click",
        (evento) => {
            if (evento.target.tagName === "BUTTON") {
                // Eliminamos el elemento del DOM
                const fila = evento.target.parentNode.parentNode;
    
                // Buscamos el título del libro desde la fila y eliminamos el libro del array
                const idLibro = parseInt(fila.id, 10);

                listaLibros = listaLibros.filter((libro) => libro.id !== idLibro);
                muestraLibros(listaLibros);
    
                // Actualizamos el contador y estadísticas
                muestraEstadisticas(listaLibros);
            }
        },
        false
    );    

    selectFiltro.addEventListener(
        "change",
        ()=>{
           let opcionFiltrado = selectFiltro.value;

           filtrarLibros(opcionFiltrado, listaLibros);
        },
        false
    );
}